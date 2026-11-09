---
title: Chat
description: The thread and the field under it.
---

# Chat

The thread and the field under it.

<div class="fui-preview"><a href="../previews/chat.html">Open the Chat preview</a></div>

## Installation

```bash
fui add chat
```

## Usage

```pudu
column("28rem", [H.div().css("block-size", "22rem").holding([Chat.chat("Conversation", [Turn.turn("Fix the failing test", [H.p().says("Fixed in the fixture.")])], PromptInput.promptInput("#", "Ask anything", PromptInput.Idle))])])
```

## API

```pudu
export fn chat(caption: Str, turns: Array[H.Node], prompt: H.Node) -> H.Node
export fn style() -> Css.Block
```
