---
title: Suggestion
description: A one-click prompt.
---

# Suggestion

A one-click prompt.

<div class="fui-preview"><a href="../previews/suggestion.html">Open the Suggestion preview</a></div>

## Installation

```bash
fui add suggestion
```

## Usage

```pudu
column("30rem", [Suggestion.suggestions("#", &["Add a dark mode toggle", "Fix the failing build", "Write tests for the form"]), PromptInput.promptInput("#", "Ask the agent to change your code...", PromptInput.Idle)])
```

## API

```pudu
/// Suggestions in a row, posted as `prompt` to `action`.
export fn suggestions(action: Str, prompts: &Array[Str]) -> H.Node

/// The styles of suggestions.
export fn style() -> Css.Block
```
