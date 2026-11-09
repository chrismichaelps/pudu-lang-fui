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
/// Whose message it is.
export type Side = Received | Sent

/// A message row.
export fn message(side: Side) -> H.Node

/// The author's initials.
export fn author(initials: Str, description: Str) -> H.Node

/// The message's content.
export fn content() -> H.Node

/// Controls under the message.
export fn actions() -> H.Node

/// Messages from one speaker, set close together.
export fn group() -> H.Node

/// The line above a message, such as a name and a time.
export fn header() -> H.Node

/// The line under a message.
export fn footer() -> H.Node

/// The styles of a message.
export fn style() -> Css.Block
```
