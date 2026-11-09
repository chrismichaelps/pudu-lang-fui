---
title: Sources
description: Links a reply used.
---

# Sources

Links a reply used.

<div class="fui-preview"><a href="../previews/sources.html">Open the Sources preview</a></div>

## Installation

```bash
fui add sources
```

## Usage

```pudu
column("22rem", [Sources.sources([Sources.source("Guide", "#"), Sources.source("Specification", "#")])])
```

## API

```pudu
export type Source = title: Str, target: Str }
export fn source(title: Str, target: Str) -> Source Source{title: title, target: target} }
export fn sources(all: Array[Source]) -> H.Node
export fn style() -> Css.Block
```
