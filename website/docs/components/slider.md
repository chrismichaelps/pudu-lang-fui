---
title: Slider
description: A value along a range.
---

# Slider

A value along a range.

<div class="fui-preview"><a href="../previews/slider.html">Open the Slider preview</a></div>

## Installation

```bash
fui add slider
```

## Usage

```pudu
column("20rem", [Slider.slider("volume", 75)])
```

## API

```pudu
/// A slider with the given name, between `minimum` and `maximum`, starting at `value`.
export fn slider(name: Str, value: Int, minimum: Int = 0, maximum: Int = 100) -> H.Node

/// The styles of a slider; a look sets its track and thumb through the variables here.
export fn style() -> Css.Block
```
