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
Suggestion.suggestions("#", &["Explain this", "Add a test"])
```

## API

```pudu
export fn suggestions(action: Str, prompts: &Array[Str]) -> H.Node
export fn style() -> Css.Block Css.block("suggestions", [Css.base("display: flex; flex-wrap: wrap; gap: $space-2; margin: 0")]) }
```
