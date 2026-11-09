---
title: Checkpoint
description: A point to return to.
---

# Checkpoint

A point to return to.

<div class="fui-preview"><a href="../previews/checkpoint.html">Open the Checkpoint preview</a></div>

## Installation

```bash
fui add checkpoint
```

## Usage

```pudu
Turn.turn("Add a settings page.", [H.p().css("margin", "0").says("Added the page and a link in the header."), Checkpoint.checkpoint("Checkpoint", "#"), H.div().css("align-self", "flex-end").holding([Bubble.bubble(Bubble.Secondary, Bubble.End).says("Now add a dark mode toggle.")])]).css("inline-size", "30rem")
```

## API

```pudu
/// A marked point with a form that restores it.
export fn checkpoint(caption: Str, action: Str) -> H.Node

/// The styles of a checkpoint.
export fn style() -> Css.Block
```
