---
title: Label
description: Names a form control.
---

# Label

Names a form control.

<div class="fui-preview"><a href="../previews/label.html">Open the Label preview</a></div>

## Installation

```bash
fui add label
```

## Usage

```pudu
Field.oriented(Field.Horizontal, false).css("inline-size", "fit-content").holding([Checkbox.checkbox("agree", Checkbox.props()), Label.label("agree").says("Accept terms")])
```

## API

```pudu
export fn label(control: Str) -> H.Node
export fn style() -> Css.Block
```
