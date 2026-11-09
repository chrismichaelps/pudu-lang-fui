---
title: Date Picker
description: A date field with a calendar.
---

# Date Picker

A date field with a calendar.

<div class="fui-preview"><a href="../previews/date-picker.html">Open the Date Picker preview</a></div>

## Installation

```bash
fui add date-picker
```

## Usage

```pudu
DatePicker.datePicker("when", "", Calendar.calendar(2026, 11, dayLink, monthLink, Calendar.props().today(Calendar.date(2026, 11, 6)).withDropdowns()))
```

## API

```pudu
/// A button naming the chosen day, or `hint` before one is chosen, opening the given calendar.
export fn datePicker(name: Str, value: Str, calendar: H.Node, hint: Str = "Pick a date") -> H.Node

/// A pair of fields for the start and end of a range.
export fn range(startName: Str, endName: Str, startValue: Str, endValue: Str) -> H.Node

/// Quick choices, each a link.
export fn presets() -> H.Node

/// The date a calendar's link carries, as `YYYY-MM-DD`.
export fn isoOf(day: &Calendar.Date) -> Str

/// A time of day field.
export fn time(name: Str, value: Str) -> H.Node

/// Dropdowns for a date far away, such as a birthday, through the given years.
export fn dropdowns(name: Str, years: &Array[Int], names: &Array[Str]) -> H.Node

/// The styles of a date picker.
export fn style() -> Css.Block
```
