---
title: Separator
description: A divider on either axis.
---

# Separator

A divider on either axis.

<div class="fui-preview"><a href="../previews/separator.html">Open the Separator preview</a></div>

## Installation

```bash
fui add separator
```

## Usage

```pudu
column("24rem", [
  H.div().holding([H.div().css("font-size", "var(--fui-text-sm)").css("font-weight", "500").says("pudu-lang-fui"), H.div().css("font-size", "var(--fui-text-sm)").css("color", "var(--fui-muted-foreground)").says("The foundation for your design system")]),
  Separator.separator(Separator.Horizontal),
  H.p().css("margin", "0").css("font-size", "var(--fui-text-sm)").says("A set of well designed components that you can customize, extend, and build on.")
])
```

## API

```pudu
/// Which way a divider runs.
export type Orientation = Horizontal | Vertical

/// A divider that separates content.
export fn separator(orientation: Orientation) -> H.Node

/// A divider with no meaning of its own.
export fn decorative(orientation: Orientation) -> H.Node

/// The styles of a separator.
export fn style() -> Css.Block
```
