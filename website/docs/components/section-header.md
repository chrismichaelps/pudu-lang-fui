---
title: Section Header
description: A small heading over a group.
---

# Section Header

A small heading over a group.

<div class="fui-preview"><a href="../previews/section-header.html">Open the Section Header preview</a></div>

## Installation

```bash
fui add section-header
```

## Usage

```pudu
SectionHeader.header().css("inline-size", "20rem").holding([SectionHeader.title().says("Recent"), SectionHeader.action().holding([H.a().href("#").says("See all")])])
```

## API

```pudu
/// The row over a group.
export fn header() -> H.Node

/// The group's heading.
export fn title() -> H.Node

/// What sits at the row's end, such as a link to the whole group.
export fn action() -> H.Node

/// The styles of a section header.
export fn style() -> Css.Block
```
