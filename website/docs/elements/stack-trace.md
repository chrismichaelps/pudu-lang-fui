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
Turn.turn("Reset the database and seed it.", [Trace.trace().holding([Trace.step(Trace.Done, "Ran pudu run migrate --reset")]), StackTrace.stackTrace("Failed: TypeError: cannot read a field of None", &["seed/users.pudu:23", "seed/main.pudu:51"]), H.p().css("margin", "0").says("The migrations ran, but the seed failed in users. One fixture has no profile, so the name is missing.")]).css("inline-size", "30rem")
```

## API

```pudu
/// The failure's message, opening to its frames.
export fn stackTrace(message: Str, frames: &Array[Str]) -> H.Node

/// The styles of a stack trace.
export fn style() -> Css.Block
```
