---
title: Message
description: One message in a thread.
---

# Message

One message in a thread.

<div class="fui-preview"><a href="../previews/message.html">Open the Message preview</a></div>

## Installation

```bash
fui add message
```

## Usage

```pudu
column("24rem", [Message.message(Message.Received).holding([Message.author("A", "Ada"), Message.content().says("The tests pass now.")])])
```

## API

```pudu
export type Side = Received | Sent
export fn message(side: Side) -> H.Node
export fn author(initials: Str, description: Str) -> H.Node
export fn content() -> H.Node
export fn actions() -> H.Node
export fn group() -> H.Node
export fn header() -> H.Node
export fn footer() -> H.Node
export fn style() -> Css.Block
```
