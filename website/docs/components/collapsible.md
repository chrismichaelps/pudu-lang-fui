---
title: Collapsible
description: Content opened and closed natively.
---

# Collapsible

Content opened and closed natively.

<div class="fui-preview"><a href="../previews/collapsible.html">Open the Collapsible preview</a></div>

## Installation

```bash
fui add collapsible
```

## Usage

```pudu
Collapsible.collapsible(true).css("inline-size", "22rem").holding([
    Collapsible.trigger().css("display", "flex").css("align-items", "center").css("justify-content", "space-between").css("padding-inline", "var(--fui-space-4)").css("padding-block", "var(--fui-space-2)").css("font-size", "var(--fui-text-sm)").css("font-weight", "500").holding([H.words("Order #4189"), Icon.sized(Icon.ChevronsUpDown, Icon.Small)]),
    Collapsible.content().holding([H.div().css("display", "flex").css("justify-content", "space-between").css("padding", "var(--fui-space-2) var(--fui-space-4)").css("border", "1px solid var(--fui-border)").css("border-radius", "var(--fui-radius)").css("font-size", "var(--fui-text-sm)").holding([H.span().css("color", "var(--fui-muted-foreground)").says("Status"), H.span().css("font-weight", "500").says("Shipped")])])
  ])
```

## API

```pudu
export fn collapsible(open: Bool = false) -> H.Node
export fn trigger() -> H.Node
export fn content() -> H.Node
export fn style() -> Css.Block
```
