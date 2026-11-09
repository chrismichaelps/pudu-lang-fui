---
type: module
path: "@root/src/PuduLangFui/Components/Composites/MessageScroller.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.MessageScroller]
---

# PuduLangFui.Components.Composites.MessageScroller

## Purpose

A thread that stays at the newest message.

## Interface

### Signatures

```pudu
export fn scroller(caption: Str) -> H.Node

export fn content() -> H.Node

export fn jump(target: Str) -> H.Node

export fn item(id: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. `flex-direction: column-reverse` pins the scroll to the end natively
2. an inner column keeps reading order.

## Negative Logic (Prohibited Paths)

- ❌ Do not measure and scroll with a script.

## Edge Cases

- History prepended above does not move the view.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Stick to bottom how?
  **A:** Reverse the column. _Rationale:_ the browser anchors it. _Rejected:_ a mutation observer.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]] · [[src/PuduLangFui/Elements/Chat]]
