---
title: Customizing
description: Four levels, from a token to the whole file.
---

# Customizing

Reach for the smallest level that does the job.

## One instance

```pudu
Button.button(Button.props()).classes("cta").token("radius-4xl", "0").says("Buy")
```

`.classes` merges with what the component set. `.token` overrides a design token for this node and
everything inside it. Import `PuduLangFui.Core.Styling` to use them.

## Every instance, from your stylesheet

Every part carries `data-slot`, and library rules sit in a cascade layer, so a plain rule wins:

```css
[data-slot="button"][data-variant="primary"] { letter-spacing: 0.02em; }
```

## The whole system

Change the [theme](theming.md).

## The component itself

The file in your project is yours. Add a variant by adding a constructor and a step:

```pudu
export type Variant = Primary | Secondary | Glass

Css.variant("variant", "glass", "backdrop-filter: blur(8px)")
```

`fui diff button` shows how your copy differs from upstream. `fui new price-tag` starts a new
component with the same shape.
