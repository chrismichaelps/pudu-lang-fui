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
column("18rem", [H.p().css("margin", "0").says("Above"), Separator.separator(Separator.Horizontal), H.p().css("margin", "0").says("Below")])
```

## API

```pudu
export type Orientation = Horizontal | Vertical
export fn separator(orientation: Orientation) -> H.Node
export fn decorative(orientation: Orientation) -> H.Node
export fn style() -> Css.Block
```
