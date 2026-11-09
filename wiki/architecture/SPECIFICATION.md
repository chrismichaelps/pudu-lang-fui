---
type: architecture
tags: [architecture, specification]
aliases: [Specification, Constitution]
---

# Specification

This project is built wiki first. The whole application exists as this vault of interlinked notes,
and the code is a faithful projection of it. A page describes a module completely enough to rebuild
it. Code without a page is unregistered; a page that no longer matches its code has drifted.

## The five laws

1. **Wiki first.** No implementation exists for a module until its page is complete: purpose,
   interface, algorithm, negative logic, and depth. No page, no code.
2. **The wiki is the truth.** The next action is a function of the task and the vault, never of
   remembered conversation. A name, contract, or decision in doubt is read from its page.
3. **Sequential integrity.** Every code change is mirrored into its page in the same turn. Work
   that ends unfinished leaves a handoff page. Wiki and code are never left out of step.
4. **The grammar is law.** Syntax is never guessed. [[grammar/pudu]] pins the compiler, the imports,
   and the prohibited patterns; a pattern not on the page is recorded under *Senior Definition
   Needed* rather than invented.
5. **Autonomous resolution.** Every answerable design question is resolved to the best senior
   default and recorded with its rejected alternatives. Only a genuine product decision escalates,
   and even then a safe default ships behind a marked assumption.

Links are double-bracketed wiki links or `@root`-relative. Machine-absolute paths never appear in the vault.

## The vault

| Folder | Holds |
| --- | --- |
| `00-INDEX.md` | The front door, linking every map of content. |
| `grammar/` | One page per language: versions, imports, laws, prohibited patterns. |
| `architecture/` | This page, [[architecture/LANGUAGE]], [[architecture/TESTING]], and the dashboard. |
| `domain/` | One page per concept; every name in the code is a term here. |
| `seams/` | One page per boundary, classified by capacity. |
| `subsystems/` | Bounded contexts. |
| `decisions/` | Architecture decision records. |
| `handoffs/` | Continuity between roles and sessions. |
| `CHANGELOG.md` | One line per logic delta. |
| `src/` | The source tree mirrored depth for depth: one page per file. |

Every folder has a `_MOC.md` that links its pages with a one-line summary. Every page ends with
`## Referenced by`, the pages linking to it. Frontmatter is plain YAML; tags enable queries such as
`#deep`, `#shallow`, `#seam`, `#adr`, `#handoff`.

## Roles

A change passes through four roles, and each transition is written on a handoff page.

| Role | Writes | Never |
| --- | --- | --- |
| Architect | seams, subsystems, architecture, maps of content | module code |
| DNA Engineer | mirrored module pages, decisions | seam classification, code |
| Shadow | source code, from a page read completely | changing a page's design, inventing logic |
| Forensic Guardian | handoffs, changelog, backlinks, vault integrity | architecture, implementation |

## The workflow

| Step | What happens |
| --- | --- |
| 0. Open the vault | Read the index and maps; resume any handoff from its exact next action. |
| 1. Align | Calibrate to maturity; read the grammar and the domain terms in scope. |
| 2. Map impact | Follow links and backlinks to every page and module the change touches. |
| 3. Author the page | Interface, algorithm, negative logic, edge cases, depth; run the grill. |
| 4. Project | Write the code the page describes. If reality disagrees, return to step 3. |
| 5. Verify | The full suite passes; page and code match exactly. |
| 6. Close the loop | Changelog line, backlinks, maps, and a handoff if work remains. |

A change touching more than 15% of a file first asks whether the file is doing too many things.

## The grill

Before a page is final, its author interrogates it as a tough senior reviewer would.

1. **Enumerate** the hard questions: interface shape, error modes, empty and hostile input,
   accessibility, naming, seam capacity, and the cost of being wrong.
2. **Generate** two or three candidate answers for each.
3. **Score** them: correctness, then simplicity and depth, then fit with convention, then
   reversibility, then performance. Prefer the boring, proven, reversible option.
4. **Resolve** and record under `## Grill Log`: the question, the answer, the rationale, and what
   was rejected.
5. **Escalate** only a product decision, with a safe default and a `> ⚠ ASSUMPTION` note.

## Measuring modules

`DEPTH_SCORE = (Leverage + Locality + Testability) / 3 - Complexity_Tax`, where leverage is the
share of the implementation the interface hides, locality the share of callers inside the module's
own subsystem, testability the share of paths testable independently, and the tax
`max(0, (cyclomatic complexity - public methods) / 5)`. Above 0.70 is deep, 0.40 to 0.70 medium,
below 0.40 shallow. The formula is paired with the deletion test: if deleting a module makes
callers repeat what it hid, it earned its place; if complexity merely moves, it was a pass-through.

A component is deliberately medium or shallow where its value is a small, readable, owned surface.
Depth is concentrated in `Domain`, `Theme`, and `Cli`, the modules a project does not own.

## Seams

Effort follows capacity. **Backbone**: two or more production adapters and frequent change; deepen
heavily, with a test adapter and a decision record. **Critical**: one adapter on a core path;
deepen moderately. **Exploratory**: one adapter with speculative variation; keep simple, collapse
after six months without a second adapter. **Internal**: both sides in one subsystem; seam rules do
not apply. Drift is `interface violations + adapter staleness + caller bypass`.

## Decision risk

`DECISION_RISK = reversibility × time to notice × cost of reversal`. Above 0.5 needs a decision
record and review; 0.1 to 0.5 a decision record; below 0.1 proceeds. Records hold status, context,
decision, rationale, consequences, alternatives, and validation.

## Comments

File headers and exported types carry one line, `/** @Namespace.Entity.Role — intent */`, five to
eight words. Every function and constant carries a short `///` stating what it answers. Rationale
stays in the Grill Log.

## Maturity

This repository is `EXPLORING`: decisions are recorded lightly, and every source file still has its
page because components are the product.

## Code laws

Folders are dependency layers, and `tools/Layers.pudu` refuses anything else. Magic values live in
`Constants/`, helpers in `Utils/`. Kinds dispatch through tables. Spacing follows
[[architecture/CODE_STYLE]].

## Integrity

Never write code without a complete page. Never write syntax without the grammar. Never end a turn
out of step or without a handoff for work in flight. Never name a concept without a domain page.

## Product scope

A complete component system for server-rendered Pudu programs.

| Area | Contents |
| --- | --- |
| Components | accordion, alert, alert dialog, aspect ratio, attachment, avatar, badge, breadcrumb, bubble, button, button group, calendar, card, carousel, chart, checkbox, code block, collapsible, combobox, command, context menu, data table, date picker, dialog, direction, drawer, dropdown menu, empty, field, hover card, input, input group, input OTP, item, kbd, label, marker, menubar, message, message scroller, native select, navigation menu, pagination, popover, progress, questionnaire, radio group, resizable, scroll area, select, separator, sheet, sidebar, skeleton, slider, spinner, switch, table, tabs, textarea, toast, toggle, toggle group, tooltip, trace, typography. |
| Elements | agent interface patterns: chain of thought, chat, checkpoint, confirmation, context, file tree, inline citation, turn, model selector, plan, prompt input, queue, reasoning, sources, stack trace, subagent, suggestion, task, terminal, test results, tool. |
| Blocks | ready-made sections and pages composed from components. |
| Website | a documentation site built with `pudu-lang-docgen`, one generated page and live preview per item. |
| Styling | seven design aspects as tokens, presets, dark mode, right-to-left layout, typeset, utilities. |
| Distribution | a generator CLI: `init`, `add`, `apply`, `preset`, `view`, `search`, `list`, `build`, `docs`, `diff`, `info`, `new`, `icons`, `doctor`; a source-tree registry with namespaces. |

Excluded by decision: a model-context protocol server.

The seven design aspects are [[domain/Aspect|color, typography, spacing, shape, elevation, motion,
and iconography]].

## Referenced by

[[00-INDEX]] · [[CHANGELOG]] · [[architecture/_MOC]] · [[handoffs/2026-11-09-initial-system]]
