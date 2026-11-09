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
/// How strongly a bubble is drawn.
export type Variant = Primary | Secondary | Muted | Outline | Destructive | Tinted | Ghost

/// Which side of the thread it sits on.
export type Align = Start | End

/// A bubble.
export fn bubble(variant: Variant, align: Align) -> H.Node

/// Bubbles from one speaker, set close together.
export fn group() -> H.Node

/// A reaction attached to a bubble.
export fn reaction() -> H.Node

/// Reactions under a bubble.
export fn reactions() -> H.Node

/// The styles of a bubble.
export fn style() -> Css.Block
```
