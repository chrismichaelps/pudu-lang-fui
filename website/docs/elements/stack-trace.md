---
title: Stack Trace
description: A failure and its frames.
---

# Stack Trace

A failure and its frames.

<div class="fui-preview"><a href="../previews/stack-trace.html">Open the Stack Trace preview</a></div>

## Installation

```bash
fui add stack-trace
```

## Usage

```pudu
column("26rem", [StackTrace.stackTrace("TypeError: expected Int", &["at one (a.pudu:1)", "at two (b.pudu:2)"])])
```

## API

```pudu
export fn stackTrace(message: Str, frames: &Array[Str]) -> H.Node
export fn style() -> Css.Block
```
