---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Alert.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Alert]
---

# PuduLangFui.Components.Primitives.Alert

## Purpose

A callout for information or a problem.

## Interface

### Signatures

```pudu
export type Variant = Neutral | Destructive | Success | Warning | Info

export fn alert(variant: Variant) -> H.Node

export fn title() -> H.Node

export fn description() -> H.Node

export fn action() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. `role=alert` with a variant
2. a leading icon takes the first column of a grid.

## Negative Logic (Prohibited Paths)

- ❌ Do not rely on color alone
- ❌ the title states the meaning.

## Edge Cases

- Without an icon the text takes the full width.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Should every alert be announced?
  **A:** `role=alert` only for destructive, `status` otherwise. _Rationale:_ announcing routine notes interrupts. _Rejected:_ always `alert`.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
