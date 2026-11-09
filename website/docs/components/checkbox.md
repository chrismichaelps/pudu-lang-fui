---
title: Checkbox
description: A native checkbox in the theme.
---

# Checkbox

A native checkbox in the theme.

<div class="fui-preview"><a href="../previews/checkbox.html">Open the Checkbox preview</a></div>

## Installation

```bash
fui add checkbox
```

## Usage

```pudu
Field.oriented(Field.Horizontal, false).css("inline-size", "fit-content").holding([Checkbox.checkbox("terms", Checkbox.props().checked()), Label.label("terms").says("Accept terms and conditions")])
```

## API

```pudu
export type Props = checked: Bool, mixed: Bool, disabled: Bool, invalid: Bool }
export fn props() -> Props
export trait Configuring
export fn checkbox(name: Str, given: Props) -> H.Node
export fn style() -> Css.Block
```
