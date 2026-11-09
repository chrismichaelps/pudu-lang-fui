---
title: Carousel
description: Slides on native scroll snap.
---

# Carousel

Slides on native scroll snap.

<div class="fui-preview"><a href="../previews/carousel.html">Open the Carousel preview</a></div>

## Installation

```bash
fui add carousel
```

## Usage

```pudu
H.div().css("inline-size", "12rem").holding([Carousel.carousel("featured", "Featured", ["1", "2", "3", "4", "5"].map(|number: Str| Card.card().holding([Card.content().css("display", "flex").css("aspect-ratio", "1").css("align-items", "center").css("justify-content", "center").css("padding", "var(--fui-space-6)").css("font-size", "1.875rem").css("font-weight", "600").says(number)])))])
```

## API

```pudu
/// Slides moved one view at a time, by arrow, scroll, or swipe.
export fn carousel(id: Str, caption: Str, slides: Array[H.Node]) -> H.Node

/// The styles of a carousel.
export fn style() -> Css.Block
```
