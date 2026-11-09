---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Drawer.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Drawer]
---

# PuduLangFui.Components.Composites.Drawer

## Purpose

A panel from any edge, dragged on native scrolling with stops and an optional shrinking background.

## Interface

### Signatures

```pudu
export type Direction = Bottom | Top | Start | End

export type Props = { direction: Direction, dismissible: Bool, scalesBackground: Bool, snapPoints: Array[Str], handle: Bool }

export fn props() -> Props

export trait Configuring {
  fn direction(self: &Self, value: Direction) -> Self

  fn modalOnly(self: &Self) -> Self

  fn scalesBackground(self: &Self) -> Self

  fn snapPoints(self: &Self, value: Array[Str]) -> Self

  fn withoutHandle(self: &Self) -> Self
}

impl Configuring for Props

export fn trigger(id: Str, given: Button.Props) -> H.Node

export fn close(id: Str, given: Button.Props) -> H.Node

export fn drawer(id: Str, name: Str, given: Props, content: Array[H.Node]) -> H.Node

export fn wrapper() -> H.Node

export fn header() -> H.Node

export fn title() -> H.Node

export fn description() -> H.Node

export fn footer() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A full-screen dialog holds a scroll-snapping track: the panel, one stop per snap point, then a dismiss region. Reversing the track for bottom and end drawers opens them fully with no script
2. a behavior closes one dragged past its last stop.

## Negative Logic (Prohibited Paths)

- ❌ Do not track pointers
- ❌ dragging is scrolling.

## Edge Cases

- Without the behavior, the dismiss region and close controls still work.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** How is dragging done without a gesture library?
  **A:** Scroll snapping. _Rationale:_ the browser supplies momentum, stops, and accessibility. _Rejected:_ pointer tracking and spring physics in a script.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
