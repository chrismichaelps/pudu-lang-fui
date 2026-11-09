---
title: Radio Group
description: One choice among several.
---

# Radio Group

One choice among several.

<div class="fui-preview"><a href="../previews/radio-group.html">Open the Radio Group preview</a></div>

## Installation

```bash
fui add radio-group
```

## Usage

```pudu
RadioGroup.group("Density").css("inline-size", "fit-content").holding([
  Field.oriented(Field.Horizontal, false).holding([RadioGroup.radio("density", "default"), Label.label("density-default").says("Default")]),
  Field.oriented(Field.Horizontal, false).holding([RadioGroup.radio("density", "comfortable", true), Label.label("density-comfortable").says("Comfortable")]),
  Field.oriented(Field.Horizontal, false).holding([RadioGroup.radio("density", "compact"), Label.label("density-compact").says("Compact")])
])
```

## API

```pudu
/// A group of radios, named for assistive software.
export fn group(caption: Str) -> H.Node

/// A radio of the group `name`, identified by `name` and `value` together.
export fn radio(name: Str, value: Str, checked: Bool = false) -> H.Node

/// The styles of a radio group.
export fn style() -> Css.Block
```
