---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Table.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.76
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.Table]
---

# PuduLangFui.Components.Primitives.Table

## Purpose

A styled data table inside a scrolling frame.

## Interface

### Signatures

```pudu
export fn table(rows: Array[H.Node]) -> H.Node

export fn caption() -> H.Node

export fn header() -> H.Node

export fn body() -> H.Node

export fn footer() -> H.Node

export fn row() -> H.Node

export fn head() -> H.Node

export fn cell() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Native table parts carrying slots, wrapped in a container that scrolls on narrow screens.

## Negative Logic (Prohibited Paths)

- ❌ Do not use `div`s for rows.

## Edge Cases

- Long content scrolls the frame, not the page.

## Depth

DEPTH 0.76 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Wrap in a scroller always?
  **A:** Yes. _Rationale:_ a table that fits today overflows tomorrow. _Rejected:_ an opt-in prop.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/DataTable]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
