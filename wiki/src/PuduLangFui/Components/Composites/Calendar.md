---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Calendar.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.8
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Composites.Calendar]
---

# PuduLangFui.Components.Composites.Calendar

## Purpose

A month as a grid of links.

## Interface

### Signatures

```pudu
export type Date = { year: Int, month: Int, day: Int }

export type Props = { today: Option[Date], selected: Option[Date], monthNames: Array[Str], weekdayNames: Array[Str] }

export fn props() -> Props

export trait Configuring {
  fn today(self: &Self, value: Date) -> Self

  fn selected(self: &Self, value: Date) -> Self

  fn names(self: &Self, months: Array[Str], weekdays: Array[Str]) -> Self
}

impl Configuring for Props

export fn date(year: Int, month: Int, day: Int) -> Date

export fn isLeap(year: Int) -> Bool

export fn daysIn(year: Int, month: Int) -> Int

export fn weekdayOf(year: Int, month: Int, day: Int) -> Int

export fn calendar(year: Int, number: Int, linkTo: fn(Date) -> Str, monthLink: fn(Int, Int) -> Str, given: Props) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Constants/Calendar]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. From the year and month compute the first weekday by days since the epoch, then lay out weeks
2. each day links through the caller's function.

## Negative Logic (Prohibited Paths)

- ❌ Do not read the clock
- ❌ `today` is given.

## Edge Cases

- Leap years come from the rule, not a table.

## Depth

DEPTH 0.8 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Client navigation between months?
  **A:** Links. _Rationale:_ the server renders any month. _Rejected:_ a date library in the browser.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]] · [[src/PuduLangFui/Components/Patterns/DatePicker]]
