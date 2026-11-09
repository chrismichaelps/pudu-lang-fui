---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Direction.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.59
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Direction]
---

# PuduLangFui.Components.Primitives.Direction

## Purpose

Sets the text direction of a region.

## Interface

### Signatures

```pudu
export fn direction(value: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `div` with `dir`
2. every component uses logical properties, so nothing else changes.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- Nesting flips within the region only.

## Depth

DEPTH 0.59 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** A provider?
  **A:** An attribute. _Rationale:_ the platform inherits it. _Rejected:_ a context value.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
