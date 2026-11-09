---
title: Button
description: An action in six treatments.
---

# Button

An action in six treatments.

<div class="fui-preview"><a href="../previews/button.html">Open the Button preview</a></div>

## Installation

```bash
fui add button
```

## Usage

```pudu
H.div().css("display", "flex").css("flex-wrap", "wrap").css("justify-content", "center").css("gap", "var(--fui-space-2)").holding([
    Button.button(Button.props().variant(Button.Outline)).says("Button"),
    Button.button(Button.props().variant(Button.Outline).size(Button.IconMedium)).label("Submit").holding([Icon.icon(Icon.ArrowUp)])
  ])
```

## API

```pudu
export type Variant = Primary | Secondary | Outline | Ghost | Hover | Destructive | Plain
export type Size = Tiny | Small | Medium | Large | IconTiny | IconSmall | IconMedium | IconLarge
export type Props = variant: Variant, size: Size, disabled: Bool }
export fn props() -> Props
export trait Configuring
export fn button(given: Props) -> H.Node
export fn submit(given: Props) -> H.Node
export fn link(target: Str, given: Props) -> H.Node
export fn style() -> Css.Block
```
