---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/ScrollArea.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.ScrollArea]
---

# PuduLangFui.Components.Primitives.ScrollArea

## Purpose

A scrolling region with a themed scrollbar.

## Interface

### Signatures

```pudu
export fn scrollArea(caption: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A focusable region using `scrollbar-color` and `scrollbar-width`.

## Negative Logic (Prohibited Paths)

- ❌ Do not fake scrollbars.

## Edge Cases

- Keyboard scrolling works because the region is focusable.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Custom or platform scrollbars?
  **A:** Platform, themed. _Rationale:_ touch and assistive behaviour are intact. _Rejected:_ a drawn scrollbar.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
