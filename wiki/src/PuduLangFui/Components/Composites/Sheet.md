---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Sheet.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.6
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Sheet]
---

# PuduLangFui.Components.Composites.Sheet

## Purpose

A panel sliding in from an edge.

## Interface

### Signatures

```pudu
export type Side = Start | End | Top | Bottom

export fn trigger(id: Str, given: Button.Props) -> H.Node

export fn close(id: Str, given: Button.Props) -> H.Node

export fn sheet(id: Str, name: Str, side: Side) -> H.Node

export fn title() -> H.Node

export fn description() -> H.Node

export fn footer() -> H.Node

export fn header() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A dialog positioned by side using logical insets.

## Negative Logic (Prohibited Paths)

- ❌ Do not use physical edges.

## Edge Cases

- Start and End flip under right-to-left.

## Depth

DEPTH 0.6 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Reuse Dialog code?
  **A:** The same element with its own block. _Rationale:_ one file, editable alone. _Rejected:_ importing Dialog's styles.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
