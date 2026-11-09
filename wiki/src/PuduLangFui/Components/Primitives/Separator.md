---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Separator.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Separator]
---

# PuduLangFui.Components.Primitives.Separator

## Purpose

A divider, horizontal or vertical.

## Interface

### Signatures

```pudu
export type Orientation = Horizontal | Vertical

export fn separator(orientation: Orientation) -> H.Node

export fn decorative(orientation: Orientation) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `div` with `role=separator` and an orientation.

## Negative Logic (Prohibited Paths)

- ❌ Do not use `hr` where the separator is decorative in a flex row.

## Edge Cases

- A decorative separator has `role=none`.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Semantic or decorative by default?
  **A:** Semantic. _Rationale:_ a separator usually separates content. _Rejected:_ decorative default.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
