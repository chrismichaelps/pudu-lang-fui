---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Trace.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Trace]
---

# PuduLangFui.Components.Composites.Trace

## Purpose

A list of steps, the building block every agent element shares.

## Interface

### Signatures

```pudu
export type Status = Pending | Running | Done | Failed

export fn trace() -> H.Node

export fn line(state: Status) -> H.Node

export fn step(state: Status, caption: Str) -> H.Node

export fn body() -> H.Node

export fn title() -> H.Node

export fn description() -> H.Node

export fn note() -> H.Node

export fn disclosure(heading: Array[H.Node], open: Bool = false) -> H.Node

export fn details(headline: Str, open: Bool = false) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Each line has an icon, title, optional description and status
2. a table maps status to icon
3. a line may expand with `details`.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on status.

## Edge Cases

- A running line's icon spins.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** One shape for all steps?
  **A:** Yes. _Rationale:_ reasoning, tools, and plans should read alike. _Rejected:_ per-element markup.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]] · [[src/PuduLangFui/Elements/ChainOfThought]] · [[src/PuduLangFui/Elements/Plan]] · [[src/PuduLangFui/Elements/Queue]] · [[src/PuduLangFui/Elements/Reasoning]] · [[src/PuduLangFui/Elements/Subagent]] · [[src/PuduLangFui/Elements/Task]] · [[src/PuduLangFui/Elements/Tool]] · [[src/PuduLangFui/Elements/Sources]] · [[src/PuduLangFui/Elements/StackTrace]] · [[src/PuduLangFui/Elements/TestResults]]
