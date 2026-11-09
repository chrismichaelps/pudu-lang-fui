---
title: Aspect Ratio
description: Holds content at a ratio.
---

# Aspect Ratio

Holds content at a ratio.

<div class="fui-preview"><a href="../previews/aspect-ratio.html">Open the Aspect Ratio preview</a></div>

## Installation

```bash
fui add aspect-ratio
```

## Usage

```pudu
AspectRatio.aspectRatio("16 / 9").css("inline-size", "24rem").css("background", "linear-gradient(135deg, var(--fui-muted), var(--fui-border))").css("border-radius", "var(--fui-radius)")
```

## API

```pudu
/// A frame of the given width-to-height ratio, written as in `16 / 9`.
export fn aspectRatio(ratio: Str) -> H.Node

/// The styles of a frame.
export fn style() -> Css.Block
```
