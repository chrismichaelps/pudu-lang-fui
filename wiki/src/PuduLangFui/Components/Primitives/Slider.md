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

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A native range styled through vendor pseudo-elements
2. the track fill follows an inline percentage.

## Negative Logic (Prohibited Paths)

- ❌ Do not rebuild dragging.

## Edge Cases

- A fill that was set on the server does not follow dragging, and the thumb remains accurate.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Show the filled track?
  **A:** From the initial value, then the thumb alone leads. _Rationale:_ no script. _Rejected:_ an input listener.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
