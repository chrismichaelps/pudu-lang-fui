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
column("20rem", [Carousel.carousel("featured", "Featured", [Card.card().holding([Card.content().says("Slide one")]), Card.card().holding([Card.content().says("Slide two")]), Card.card().holding([Card.content().says("Slide three")])])])
```

## API

```pudu
export fn carousel(id: Str, caption: Str, slides: Array[H.Node]) -> H.Node
export fn style() -> Css.Block
```
