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
export fn datePicker(name: Str, value: Str, calendar: H.Node, hint: Str = "Pick a date") -> H.Node
export fn range(startName: Str, endName: Str, startValue: Str, endValue: Str) -> H.Node
export fn presets() -> H.Node
export fn isoOf(day: &Calendar.Date) -> Str
export fn time(name: Str, value: Str) -> H.Node Input.input(name, Input.props().kind("time")).value(value) }
export fn dropdowns(name: Str, years: &Array[Int], names: &Array[Str]) -> H.Node
export fn style() -> Css.Block
```
