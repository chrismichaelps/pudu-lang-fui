---
title: Model Selector
description: Picks a model and an effort.
---

# Model Selector

Picks a model and an effort.

<div class="fui-preview"><a href="../previews/model-selector.html">Open the Model Selector preview</a></div>

## Installation

```bash
fui add model-selector
```

## Usage

```pudu
column("30rem", [PromptInput.promptInput("#", "Ask the agent to change your code...", PromptInput.Idle, [], [ModelSelector.modelSelector(&["Pudu Fast", "Pudu Deep"], &["Low", "Medium", "High"], "Pudu Deep", "Medium")])])
```

## API

```pudu
/// Two menus for the model and how hard it works.
export fn modelSelector(models: &Array[Str], efforts: &Array[Str], model: Str, effort: Str) -> H.Node

/// The styles of a selector.
export fn style() -> Css.Block
```
