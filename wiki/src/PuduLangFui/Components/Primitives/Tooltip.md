---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Tooltip.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Tooltip]
---

# PuduLangFui.Components.Primitives.Tooltip

## Purpose

A short hint on hover or focus.

## Interface

### Signatures

```pudu
export fn tooltip(hint: Str, control: H.Node) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A wrapper around the trigger
2. hover or focus-within reveals a `role=tooltip` sibling.

## Negative Logic (Prohibited Paths)

- ❌ Do not put interactive content in a tooltip.

## Edge Cases

- Hidden while the wrapper is neither hovered nor focused.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** The popover attribute?
  **A:** No, hover has no declarative trigger on 0.1.3's platform baseline. _Rationale:_ CSS is enough. _Rejected:_ a behavior.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
