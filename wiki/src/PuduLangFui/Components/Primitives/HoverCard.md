---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/HoverCard.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.HoverCard]
---

# PuduLangFui.Components.Primitives.HoverCard

## Purpose

A preview shown when hovering a link.

## Interface

### Signatures

```pudu
export fn hoverCard(link: H.Node, card: H.Node) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Same reveal as a tooltip, larger, with a delay through transition timing.

## Negative Logic (Prohibited Paths)

- ❌ Do not hide essential content here.

## Edge Cases

- Keyboard reveals through focus-within.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Delay?
  **A:** A short transition delay. _Rationale:_ passing pointers should not flash cards. _Rejected:_ a timer.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/InlineCitation]] · [[src/PuduLangFui/Elements/Context]]
