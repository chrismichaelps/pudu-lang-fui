---
title: Context
description: How full the context window is.
---

# Context

How full the context window is.

<div class="fui-preview"><a href="../previews/context.html">Open the Context preview</a></div>

## Installation

```bash
fui add context
```

## Usage

```pudu
Context.context(16000, 200000)
```

## API

```pudu
export fn context(used: Int, limit: Int) -> H.Node
export fn style() -> Css.Block
```
