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
ModelSelector.modelSelector(&["fast", "deep"], &["low", "high"], "deep", "high")
```

## API

```pudu
export fn modelSelector(models: &Array[Str], efforts: &Array[Str], model: Str, effort: Str) -> H.Node
export fn style() -> Css.Block Css.block("model-selector", [Css.base("display: inline-flex; gap: $space-2")]) }
```
