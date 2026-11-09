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
/// A day of the calendar.
export type Date = { year: Int, month: Int, day: Int }

/// What a month shows.
export type Props = { today: Option[Date], selected: Option[Date], monthNames: Array[Str], weekdayNames: Array[Str], dropdowns: Bool }

/// No day marked, in English.
export fn props() -> Props

/// One method per prop.
export trait Configuring

/// A date from its parts.
export fn date(year: Int, month: Int, day: Int) -> Date

/// Whether a year has a leap day.
export fn isLeap(year: Int) -> Bool

/// How many days a month has.
export fn daysIn(year: Int, month: Int) -> Int

/// The weekday of a date, Sunday as zero.
export fn weekdayOf(year: Int, month: Int, day: Int) -> Int

/// A month whose days link through `linkTo` and whose arrows link through `monthLink`.
export fn calendar(year: Int, number: Int, linkTo: fn(Date) -> Str, monthLink: fn(Int, Int) -> Str, given: Props) -> H.Node

/// The styles of a calendar.
export fn style() -> Css.Block
```
