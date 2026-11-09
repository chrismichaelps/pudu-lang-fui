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
H.div().css("inline-size", "34rem").css("block-size", "26rem").css("border", "1px solid var(--fui-border)").css("border-radius", "var(--fui-radius-xl)").css("overflow", "hidden").holding([
    Chat.header("New thread", "Ask the agent to change your code.", [Button.button(Button.props().variant(Button.Ghost).size(Button.IconSmall)).label("Start over").holding([Icon.icon(Icon.Edit)])]),
    H.div().css("block-size", "calc(100% - 3.75rem)").holding([Chat.chat("Conversation", [H.div().at("data-demo-thread", "").css("display", "flex").css("flex-direction", "column").css("gap", "var(--fui-space-3)").css("padding", "var(--fui-space-4)").holding([
                Bubble.bubble(Bubble.Secondary, Bubble.End).css("display", "none").at("data-demo-template", ""),
                Empty.empty().holding([Empty.header().holding([Empty.media().holding([Icon.icon(Icon.Spark)]), Empty.title().says("What should we build?"), Empty.description().says("The agent can read your code, run commands, and make changes. Press send to start.")])])
              ])], PromptInput.promptInput("#", "Ask the agent to change your code...", PromptInput.Idle, [], [], "Add a dark mode toggle to the settings page."))])
  ])
```

## API

```pudu
export fn chat(caption: Str, turns: Array[H.Node], prompt: H.Node) -> H.Node
export fn header(title: Str, note: Str, actions: Array[H.Node] = []) -> H.Node
export fn style() -> Css.Block
```
