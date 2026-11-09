---
title: Message Scroller
description: A thread pinned to its newest.
---

# Message Scroller

A thread pinned to its newest.

<div class="fui-preview"><a href="../previews/message-scroller.html">Open the Message Scroller preview</a></div>

## Installation

```bash
fui add message-scroller
```

## Usage

```pudu
column("24rem", [MessageScroller.scroller("Thread").css("block-size", "12rem").holding([MessageScroller.content().holding([Bubble.bubble(Bubble.Secondary, Bubble.Start).says("First"), Bubble.bubble(Bubble.Primary, Bubble.End).says("Second"), Bubble.bubble(Bubble.Secondary, Bubble.Start).says("Third"), Bubble.bubble(Bubble.Primary, Bubble.End).says("Fourth")])])])
```

## API

```pudu
export fn scroller(caption: Str) -> H.Node
export fn content() -> H.Node
export fn jump(target: Str) -> H.Node
export fn item(id: Str) -> H.Node
export fn style() -> Css.Block
```
