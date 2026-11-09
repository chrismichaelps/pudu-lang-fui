---
title: Bubble
description: Conversational content in a bubble.
---

# Bubble

Conversational content in a bubble.

<div class="fui-preview"><a href="../previews/bubble.html">Open the Bubble preview</a></div>

## Installation

```bash
fui add bubble
```

## Usage

```pudu
column("24rem", [Bubble.group().holding([Bubble.bubble(Bubble.Secondary, Bubble.Start).says("Did the build pass?"), Bubble.bubble(Bubble.Primary, Bubble.End).says("All green.")])])
```

## API

```pudu
export type Variant = Primary | Secondary | Muted | Outline | Destructive | Tinted | Ghost
export type Align = Start | End
export fn bubble(variant: Variant, align: Align) -> H.Node
export fn group() -> H.Node
export fn reaction() -> H.Node
export fn reactions() -> H.Node
export fn style() -> Css.Block
```
