---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Slider.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Slider]
---

# PuduLangFui.Components.Primitives.Slider

## Purpose

A value along a range.

## Interface

### Signatures

```pudu
export fn slider(name: Str, value: Int, minimum: Int = 0, maximum: Int = 100) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/WidgetScripts]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A native range whose fill follows an inline percentage that a small script keeps current while the thumb moves; a look sets the track and thumb through variables.

## Negative Logic (Prohibited Paths)

- ❌ Do not rebuild dragging.

## Edge Cases

- A dragged thumb and its fill always agree, in either direction.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Show the filled track?
  **A:** From the initial value, then the thumb alone leads. _Rationale:_ no script. _Rejected:_ an input listener.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
