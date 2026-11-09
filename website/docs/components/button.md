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
/// How loud a button reads.
export type Variant = Primary | Secondary | Outline | Ghost | Hover | Destructive | Plain

/// How much room a button takes.
export type Size = Tiny | Small | Medium | Large | IconTiny | IconSmall | IconMedium | IconLarge

/// What a button can be told.
export type Props = { variant: Variant, size: Size, disabled: Bool }

/// A primary button of medium size.
export fn props() -> Props

/// One method per prop.
export trait Configuring

/// A button that does nothing until something is attached to it.
export fn button(given: Props) -> H.Node

/// A button that submits its form.
export fn submit(given: Props) -> H.Node

/// A link that reads as a button.
export fn link(target: Str, given: Props) -> H.Node

/// The styles of a button.
export fn style() -> Css.Block
```
