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
ScrollArea.scrollArea("Tags").css("block-size", "10rem").css("inline-size", "14rem").holding([H.p().css("margin", "0").says("A long list that scrolls inside its region, past the edge of the box, line after line after line, until it finally reaches the end.")])
```

## API

```pudu
export fn scrollArea(caption: Str) -> H.Node
export fn style() -> Css.Block
```
