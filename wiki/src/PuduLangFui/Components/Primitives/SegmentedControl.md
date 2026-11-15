---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/SegmentedControl.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.60
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.SegmentedControl]
---

# PuduLangFui.Components.Primitives.SegmentedControl

## Purpose

One choice among a few.

## Interface

### Signatures

```pudu
export fn control(caption: Str) -> H.Node

export fn segment(name: Str, value: Str, chosen: Bool = false) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Radios inside equal columns of a track; the checked segment is raised.

## Negative Logic (Prohibited Paths)

- ❌ Do not script the selection.

## Edge Cases

- Arrow keys move the choice because the segments are one radio group.

## Depth

DEPTH 0.60 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Reuse the toggle group?
  **A:** No. _Rationale:_ segments share one track of equal columns and always hold exactly one choice. _Rejected:_ a toggle group variant.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
