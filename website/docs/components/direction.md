---
title: Direction
description: Sets a region's text direction.
---

# Direction

Sets a region's text direction.

<div class="fui-preview"><a href="../previews/direction.html">Open the Direction preview</a></div>

## Installation

```bash
fui add direction
```

## Usage

```pudu
Direction.direction("rtl").holding([column("20rem", [demoAlert()])])
```

## API

```pudu
export fn direction(value: Str) -> H.Node
export fn style() -> Css.Block Css.block("direction", [Css.base("display: contents")]) }
```
