---
title: Prompt Input
description: A message field and send.
---

# Prompt Input

A message field and send.

<div class="fui-preview"><a href="../previews/prompt-input.html">Open the Prompt Input preview</a></div>

## Installation

```bash
fui add prompt-input
```

## Usage

```pudu
column("30rem", [PromptInput.promptInput("#", "Ask the agent to change your code...", PromptInput.Idle)])
```

## API

```pudu
/// Whether a reply is under way.
export type State = Idle | Running

/// A form posting `prompt` to `action`, holding any attachments above the field and any controls beside send.
export fn promptInput(action: Str, hint: Str, state: State, attachments: Array[H.Node] = [], controls: Array[H.Node] = [], value: Str = "") -> H.Node

/// The styles of a prompt.
export fn style() -> Css.Block
```
