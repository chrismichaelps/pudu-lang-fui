---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Effects.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Effects]
---

# PuduLangFui.Components.Primitives.Effects

## Purpose

Two visual utilities: a shimmer over text and a fade at the edges of a scroller.

## Interface

### Signatures

```pudu
export fn shimmer() -> H.Node

export fn scrollFade() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A moving gradient clipped to text
2. a scroll-driven mask on the scroller's edges.

## Negative Logic (Prohibited Paths)

- ❌ Do not animate under reduced motion
- ❌ the duration token is zero.

## Edge Cases

- Without scroll-driven animation the fade is static on both edges.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Classes or components?
  **A:** Parts with slots. _Rationale:_ slots are how a page finds what it needs. _Rejected:_ always-shipped utility classes.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/Reasoning]]
