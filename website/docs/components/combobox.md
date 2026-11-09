---
title: Combobox
description: A field with suggestions.
---

# Combobox

A field with suggestions.

<div class="fui-preview"><a href="../previews/combobox.html">Open the Combobox preview</a></div>

## Installation

```bash
fui add combobox
```

## Usage

```pudu
column("18rem", [Combobox.combobox("city", &["Lima", "Quito", "Santiago", "Bogotá"])])
```

## API

```pudu
export fn combobox(name: Str, suggestions: &Array[Str]) -> H.Node
export fn style() -> Css.Block Css.block("combobox", [Css.base("display: block; inline-size: 100%")]) }
```
