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
column("24rem", [Field.group().holding([
        Field.oriented(Field.Horizontal, false).holding([Checkbox.checkbox("terms", Checkbox.props()), Label.label("terms").says("Accept terms and conditions")]),
        Field.oriented(Field.Horizontal, false).holding([Checkbox.checkbox("terms-2", Checkbox.props().checked()), Field.content().holding([Label.label("terms-2").says("Accept terms and conditions"), Field.description().says("By clicking this checkbox, you agree to the terms.")])]),
        Field.oriented(Field.Horizontal, false).holding([Checkbox.checkbox("toggle", Checkbox.props().disabled()), Label.label("toggle").says("Enable notifications")]),
        H.labelFor().at("for", "toggle-2").css("display", "block").css("padding", "var(--fui-space-3)").css("border", "1px solid var(--fui-border)").css("border-radius", "var(--fui-radius)").holding([Field.oriented(Field.Horizontal, false).holding([Checkbox.checkbox("toggle-2", Checkbox.props()), Field.content().holding([Field.title().says("Enable notifications"), Field.description().says("You can enable or disable notifications at any time.")])])])
      ])])
```

## API

```pudu
export type Props = { checked: Bool, mixed: Bool, disabled: Bool, invalid: Bool }
export fn props() -> Props
export trait Configuring
export fn checkbox(name: Str, given: Props) -> H.Node
export fn style() -> Css.Block
```
