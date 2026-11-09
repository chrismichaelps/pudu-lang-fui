---
title: Resizable
description: Panels the reader can resize.
---

# Resizable

Panels the reader can resize.

<div class="fui-preview"><a href="../previews/resizable.html">Open the Resizable preview</a></div>

## Installation

```bash
fui add resizable
```

## Usage

```pudu
Resizable.group(Resizable.Horizontal).css("inline-size", "24rem").css("block-size", "10rem").holding([Resizable.panel("40%").css("padding", "var(--fui-space-4)").says("Sidebar"), Resizable.panel("60%").css("padding", "var(--fui-space-4)").says("Content")])
```

## API

```pudu
export type Orientation = Horizontal | Vertical
export fn group(orientation: Orientation) -> H.Node
export fn panel(share: Str) -> H.Node
export fn style() -> Css.Block
```
