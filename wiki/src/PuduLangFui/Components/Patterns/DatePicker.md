---
type: module
path: "@root/src/PuduLangFui/Components/Patterns/DatePicker.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Patterns.DatePicker]
---

# PuduLangFui.Components.Patterns.DatePicker

## Purpose

A date field with a calendar.

## Interface

### Signatures

```pudu
export fn datePicker(name: Str, value: Str, calendar: H.Node, hint: Str = "Pick a date") -> H.Node

export fn range(startName: Str, endName: Str, startValue: Str, endValue: Str) -> H.Node

export fn presets() -> H.Node

export fn isoOf(day: &Calendar.Date) -> Str

export fn time(name: Str, value: Str) -> H.Node

export fn dropdowns(name: Str, years: &Array[Int], names: &Array[Str]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Calendar]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Components/Primitives/Input]] · [[src/PuduLangFui/Components/Primitives/NativeSelect]] · [[src/PuduLangFui/Components/Primitives/Popover]] · [[src/PuduLangFui/Constants/WidgetScripts]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A button names the chosen day and opens a calendar; picking a day fills a hidden field and the button.

## Negative Logic (Prohibited Paths)

- ❌ Do not parse dates in the view.

## Edge Cases

- An empty value shows the hint.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Native input?
  **A:** As the primary control. _Rationale:_ phones and assistive software handle it. _Rejected:_ calendar only.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/_MOC]]
