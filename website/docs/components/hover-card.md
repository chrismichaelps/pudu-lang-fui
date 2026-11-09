---
title: Hover Card
description: A preview shown over a link.
---

# Hover Card

A preview shown over a link.

<div class="fui-preview"><a href="../previews/hover-card.html">Open the Hover Card preview</a></div>

## Installation

```bash
fui add hover-card
```

## Usage

```pudu
HoverCard.hoverCard(H.a().href("#").says("@pudu"), H.p().css("margin", "0").says("A statically typed language."))
```

## API

```pudu
export fn hoverCard(link: H.Node, card: H.Node) -> H.Node
export fn style() -> Css.Block
```
