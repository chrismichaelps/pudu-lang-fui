---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Resizable.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Resizable]
---

# PuduLangFui.Components.Primitives.Resizable

## Purpose

Panels the reader can resize.

## Interface

### Signatures

```pudu
export type Orientation = Horizontal | Vertical

export fn group(orientation: Orientation) -> H.Node

export fn panel(share: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Each panel uses CSS `resize` along the group's axis.

## Negative Logic (Prohibited Paths)

- ❌ Do not implement dragging.

## Edge Cases

- The last panel takes the remaining room.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Native resize?
  **A:** Yes. _Rationale:_ works everywhere with no script. _Rejected:_ a splitter behavior.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
