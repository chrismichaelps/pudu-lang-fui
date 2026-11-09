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
/// A scrolling thread; the children sit in reading order inside `content`.
export fn scroller(caption: Str) -> H.Node

/// The thread in reading order.
export fn content() -> H.Node

/// A link jumping to the message with the given id.
export fn jump(target: Str) -> H.Node

/// One message, reachable by a jump link.
export fn item(id: Str) -> H.Node

/// The styles of a thread.
export fn style() -> Css.Block
```
