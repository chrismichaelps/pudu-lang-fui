---
title: Trace
description: Steps every agent element shares.
---

# Trace

Steps every agent element shares.

<div class="fui-preview"><a href="../previews/trace.html">Open the Trace preview</a></div>

## Installation

```bash
fui add trace
```

## Usage

```pudu
column("22rem", [Trace.trace().holding([Trace.step(Trace.Done, "Read the file"), Trace.step(Trace.Running, "Run the tests"), Trace.step(Trace.Pending, "Open a pull request")])])
```

## API

```pudu
export type Status = Pending | Running | Done | Failed
export fn trace() -> H.Node
export fn line(state: Status) -> H.Node
export fn step(state: Status, caption: Str) -> H.Node line(state).holding([body().holding([title().says(caption)])]) }
export fn body() -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn note() -> H.Node
export fn disclosure(heading: Array[H.Node], open: Bool = false) -> H.Node
export fn details(headline: Str, open: Bool = false) -> H.Node disclosure([H.words(headline)], open) }
export fn style() -> Css.Block
```
