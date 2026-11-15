---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Toolbar.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.60
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Toolbar]
---

# PuduLangFui.Components.Primitives.Toolbar

## Purpose

A bar with leading, title and trailing regions.

## Interface

### Signatures

```pudu
export fn toolbar(caption: Str) -> H.Node

export fn leading() -> H.Node

export fn title() -> H.Node

export fn trailing() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Three columns; the title stays centered whatever the side regions hold.

## Negative Logic (Prohibited Paths)

- ❌ Do not place navigation links for the whole site here.

## Edge Cases

- The title truncates when the sides grow.

## Depth

DEPTH 0.60 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Center the title with flex?
  **A:** No, a three-column grid. _Rationale:_ equal side columns keep the title centered. _Rejected:_ absolute positioning.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
