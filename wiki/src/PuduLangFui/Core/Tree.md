---
type: module
path: "@root/src/PuduLangFui/Core/Tree.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: pending
depth_status: UNMEASURED
depth_basis: no depth measurement recorded yet
tags: [module, active]
aliases: [PuduLangFui.Core.Tree]
---

# PuduLangFui.Core.Tree

## Purpose

The tree every component's tree form answers. It records what a component means (role, part, facts,
flags, ordered children) beside the web dress the HTML presenter writes, so one component tree serves
the HTML presenter now and a native presenter later. See [[domain/Tree]] and
[[decisions/ADR-0013-one-tree-many-presenters]].

## Interface

### Signatures

```pudu
export type Role = Action | Text | Heading | Group | Field | Switch | Choice | Image | Link | Region | Divider | Meter

export type Child = Words(Str) | Nested(Tree) | Markup(Html.Html)

export type Tree = { role: Role, part: Str, facts: Array[(Str, Str)], flags: Array[Str], dress: H.Node, children: Array[Child] }

export fn of(role: Role, dress: H.Node) -> Tree

export fn nests(node: &Tree, child: Tree) -> Tree

export fn web(node: &Tree) -> H.Node

impl H.Building for Tree

impl Core.Styling for Tree
```

`nests` is also a method through the Composing trait: `node.nests(child)`.

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · `Std.Html.Build` · `Std.Html`
- **Provides:** the tree type that every component's tree form returns.

## Algorithm

1. `of` builds a tree with the role, an empty part, no facts, no flags, no children, and the dress.
2. Each building and styling call writes the dress in call order, exactly as on `H.Node`.
3. `slot` also sets `part`. `data` also appends a fact. `flag`, `flagIf`, `disabled`, `checked`, and
   `required` also record a flag.
4. `says` appends `Words`. `holds` and `holding` append `Markup`. `nests` appends `Nested`.
5. `web` writes the dress with the children presented in order. `html()` is `web(...)` rendered as HTML.

## Negative Logic (Prohibited Paths)

- ❌ No presenter reads anything but the tree.
- ❌ No CSS reaches a native presenter.
- ❌ No reordering of attributes or children, in the dress or in the children list.
- ❌ Do not rebuild HTML from facts. The dress is the only source of web output.

## Edge Cases

- Empty text appends no child, as in [[src/PuduLangFui/Core/Styling]].
- A tree with no children and no dress attributes renders as the bare element the role names.

## Depth

Not yet measured. The module is active under [[subsystems/Components]], under [[grammar/pudu]].

## Tests

test/PuduLangFui/Core/TreeTest.pudu holds 19 checks: a tree renders exactly as the same calls on an element; role, part, facts and flags are recorded; children keep their order and kind; conditional children are added only when held; every attribute, form and styling method keeps the element's spelling.

test/PuduLangFui/Components/TreeFormsTest.pudu holds 23 checks: every tree form renders exactly as its element function and carries the role, part and facts a presenter reads.

## Grill Log

- **Q:** Why keep the dress instead of computing attributes from facts?
  **A:** Attribute order and every web-only attribute must survive exactly. Facts are recorded beside
  the dress for the presenters that need meaning. _Rationale:_ the catalog snapshot must stay byte for
  byte. _Rejected:_ rebuilding HTML from facts.
- **Q:** Why implement the standard building trait?
  **A:** Component bodies and project code keep their chains. _Rationale:_ one vocabulary, as in
  [[decisions/ADR-0001-open-nodes-and-props]]. _Rejected:_ a new chain vocabulary.
- **Q:** Why is the role a closed sum rather than a text name?
  **A:** Presenters switch on it exhaustively, so a misspelled role cannot compile. _Rejected:_ free-text
  role names.
- **Q:** Why is the type `Tree` and not `Node`?
  **A:** The published compiler dispatches a trait method by the bare type name, so a second `Node`
  implementing the building trait would run the wrong implementation. `Std.Html.Build` already has
  `Node`. _Rejected:_ relying on a compiler fix that is not released.

## Referenced by

[[src/PuduLangFui/Core/_MOC]] · [[domain/Tree]] · [[decisions/ADR-0013-one-tree-many-presenters]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Label]] · [[src/PuduLangFui/Components/Primitives/Badge]] · [[src/PuduLangFui/Components/Primitives/Separator]] · [[src/PuduLangFui/Components/Primitives/Switch]] · [[src/PuduLangFui/Components/Primitives/Checkbox]] · [[src/PuduLangFui/Components/Primitives/Progress]] · [[src/PuduLangFui/Components/Primitives/Input]] · [[src/PuduLangFui/Components/Primitives/Card]] · [[handoffs/2026-11-14-one-tree]]
