---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Marker.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Marker]
---

# PuduLangFui.Components.Primitives.Marker

## Purpose

An inline status, system note, bordered row, or labeled separator in a conversation.

## Interface

### Signatures

```pudu
export type Kind = Status | System | Row | Divider

export fn marker(kind: Kind) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. One slot with a kind attribute
2. the block styles each kind.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- None.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Four components?
  **A:** One with a kind. _Rationale:_ they share everything but paint. _Rejected:_ four files.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/Checkpoint]]
