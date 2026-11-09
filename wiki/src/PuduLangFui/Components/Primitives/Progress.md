---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Progress.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.74
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.Progress]
---

# PuduLangFui.Components.Primitives.Progress

## Purpose

Completion of a task.

## Interface

### Signatures

```pudu
export fn progress(value: Int, maximum: Int, caption: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A native `progress` styled through its pseudo-elements.

## Negative Logic (Prohibited Paths)

- ❌ Do not rebuild it from `div`s.

## Edge Cases

- Values are clamped by the element.

## Depth

DEPTH 0.74 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Native or custom?
  **A:** Native. _Rationale:_ semantics and clamping for free. _Rejected:_ a styled `div` with ARIA.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/Questionnaire]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/Context]]
