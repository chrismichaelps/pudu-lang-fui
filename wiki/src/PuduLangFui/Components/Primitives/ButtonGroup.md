---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/ButtonGroup.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.ButtonGroup]
---

# PuduLangFui.Components.Primitives.ButtonGroup

## Purpose

Joins related buttons so they read as one control.

## Interface

### Signatures

```pudu
export type Orientation = Horizontal | Vertical

export fn group(orientation: Orientation) -> H.Node

export fn text() -> H.Node

export fn separator() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `role=group` wrapper
2. its block squares inner corners using logical properties.

## Negative Logic (Prohibited Paths)

- ❌ Do not use physical corner properties.

## Edge Cases

- A vertical group joins along the block axis.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Should a group restyle its buttons through props?
  **A:** No, through its block. _Rationale:_ buttons stay ignorant of being grouped. _Rejected:_ a `grouped` button prop.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
