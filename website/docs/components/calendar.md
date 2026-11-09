---
title: Calendar
description: A month as links.
---

# Calendar

A month as links.

<div class="fui-preview"><a href="../previews/calendar.html">Open the Calendar preview</a></div>

## Installation

```bash
fui add calendar
```

## Usage

```pudu
Calendar.calendar(2026, 11, dayLink, monthLink, Calendar.props().today(Calendar.date(2026, 11, 6)).selected(Calendar.date(2026, 11, 6)).withDropdowns()).css("border", "1px solid var(--fui-border)").css("border-radius", "var(--fui-radius)")
```

## API

```pudu
export type Date = { year: Int, month: Int, day: Int }
export type Props = { today: Option[Date], selected: Option[Date], monthNames: Array[Str], weekdayNames: Array[Str], dropdowns: Bool }
export fn props() -> Props
export trait Configuring
export fn date(year: Int, month: Int, day: Int) -> Date
export fn isLeap(year: Int) -> Bool
export fn daysIn(year: Int, month: Int) -> Int
export fn weekdayOf(year: Int, month: Int, day: Int) -> Int
export fn calendar(year: Int, number: Int, linkTo: fn(Date) -> Str, monthLink: fn(Int, Int) -> Str, given: Props) -> H.Node
export fn style() -> Css.Block
```
