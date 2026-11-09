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
H.div().css("display", "flex").css("align-items", "center").css("gap", "var(--fui-space-2)").holding([Checkbox.checkbox("agree", Checkbox.props()), Label.label("agree").says("Accept terms and conditions")])
```

## API

```pudu
/// A label for the control with the given id.
export fn label(control: Str) -> H.Node

/// The styles of a label.
export fn style() -> Css.Block
```
