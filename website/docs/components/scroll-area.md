---
title: Scroll Area
description: A region with a themed scrollbar.
---

# Scroll Area

A region with a themed scrollbar.

<div class="fui-preview"><a href="../previews/scroll-area.html">Open the Scroll Area preview</a></div>

## Installation

```bash
fui add scroll-area
```

## Usage

```pudu
ScrollArea.scrollArea("Tags").css("block-size", "18rem").css("inline-size", "12rem").css("border", "1px solid var(--fui-border)").css("border-radius", "calc(var(--fui-radius) * 0.8)").holding([
  H.div().css("padding", "var(--fui-space-4)").holding([H.h3().css("margin", "0 0 var(--fui-space-4)").css("font-size", "var(--fui-text-sm)").css("font-weight", "500").says("Tags")].concat(tagRows()))
])
```

## API

```pudu
/// A scrolling region, named for assistive software and reachable by keyboard.
export fn scrollArea(caption: Str) -> H.Node

/// The styles of a region.
export fn style() -> Css.Block
```
