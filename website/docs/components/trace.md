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
/// How a step stands.
export type Status = Pending | Running | Done | Failed

/// A list of steps.
export fn trace() -> H.Node

/// A step with its status icon in place.
export fn line(state: Status) -> H.Node

/// A finished line of text at a status.
export fn step(state: Status, caption: Str) -> H.Node

/// The step's text.
export fn body() -> H.Node

/// The step's headline.
export fn title() -> H.Node

/// The step's supporting text.
export fn description() -> H.Node

/// A short word at the end of a step.
export fn note() -> H.Node

/// A disclosure whose heading is the given nodes, followed by a chevron.
export fn disclosure(heading: Array[H.Node], open: Bool = false) -> H.Node

/// A disclosure inside a step: a headline and what opens under it.
export fn details(headline: Str, open: Bool = false) -> H.Node

/// The styles of a trace.
export fn style() -> Css.Block
```
