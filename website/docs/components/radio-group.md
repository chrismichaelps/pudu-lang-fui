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
RadioGroup.group("Density").holding([
    Field.oriented(Field.Horizontal, false).holding([RadioGroup.radio("density", "default", true), Label.label("density-default").says("Default")]),
    Field.oriented(Field.Horizontal, false).holding([RadioGroup.radio("density", "compact"), Label.label("density-compact").says("Compact")])
  ])
```

## API

```pudu
export fn group(caption: Str) -> H.Node
export fn radio(name: Str, value: Str, checked: Bool = false) -> H.Node
export fn style() -> Css.Block
```
