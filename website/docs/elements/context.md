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
/// A short reading of `used` out of `limit` that opens to a meter on hover.
export fn context(used: Int, limit: Int) -> H.Node

/// The styles of a context meter.
export fn style() -> Css.Block
```
