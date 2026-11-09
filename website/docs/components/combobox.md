---
title: Combobox
description: A field that filters a list of choices.
---

# Combobox

A field that filters a list of choices.

<div class="fui-preview"><a href="../previews/combobox.html">Open the Combobox preview</a></div>

## Installation

```bash
fui add combobox
```

## Usage

```pudu
column("14rem", [Combobox.combobox("framework", &["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"], "Select a framework")])
```

## API

```pudu
export fn combobox(name: Str, suggestions: &Array[Str], hint: Str = "") -> H.Node
export fn style() -> Css.Block
```
