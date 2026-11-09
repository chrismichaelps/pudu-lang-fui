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
AspectRatio.aspectRatio("16 / 9").css("inline-size", "20rem").css("background", "var(--fui-muted)").css("border-radius", "var(--fui-radius-xl)")
```

## API

```pudu
export fn aspectRatio(ratio: Str) -> H.Node
export fn style() -> Css.Block
```
