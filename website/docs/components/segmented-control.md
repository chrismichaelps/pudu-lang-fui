---
title: Segmented Control
description: One choice among a few.
---

# Segmented Control

One choice among a few.

<div class="fui-preview"><a href="../previews/segmented-control.html">Open the Segmented Control preview</a></div>

## Installation

```bash
fui add segmented-control
```

## Usage

```pudu
SegmentedControl.control("View").holding([
  SegmentedControl.segment("view", "day").says("Day"),
  SegmentedControl.segment("view", "week", true).says("Week"),
  SegmentedControl.segment("view", "month").says("Month")
])
```

## API

```pudu
/// The track holding the segments, named for assistive software.
export fn control(caption: Str) -> H.Node

/// A segment of the group `name`.
export fn segment(name: Str, value: Str, chosen: Bool = false) -> H.Node

/// The styles of a segmented control.
export fn style() -> Css.Block
```
