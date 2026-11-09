---
title: Effects
description: Shimmer and scroll-edge fades.
---

# Effects

Shimmer and scroll-edge fades.

<div class="fui-preview"><a href="../previews/effects.html">Open the Effects preview</a></div>

## Installation

```bash
fui add effects
```

## Usage

```pudu
Effects.shimmer().says("Thinking about it")
```

## API

```pudu
/// Text with a moving highlight, for activity in progress.
export fn shimmer() -> H.Node

/// A scroller whose edges fade while more content lies beyond them.
export fn scrollFade() -> H.Node

/// The styles of the effects.
export fn style() -> Css.Block
```
