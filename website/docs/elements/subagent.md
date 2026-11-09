---
title: Subagent
description: A nested run.
---

# Subagent

A nested run.

<div class="fui-preview"><a href="../previews/subagent.html">Open the Subagent preview</a></div>

## Installation

```bash
fui add subagent
```

## Usage

```pudu
Turn.turn("Why does image optimization rerun on every deploy?", [Trace.trace().holding([Subagent.subagent("Ran the research subagent", Trace.Done, [Trace.step(Trace.Done, "Ran grep -rn cache build/"), Trace.step(Trace.Done, "Ran pudu run cache --stats")], H.p().css("margin", "0").says("The cache is keyed on the commit, which changes on every deploy."), true)]), H.p().css("margin", "0").says("Key the cache on a hash of the image folder, and unchanged images will be skipped.")]).css("inline-size", "30rem")
```

## API

```pudu
export fn subagent(title: Str, status: Trace.Status, steps: Array[H.Node], result: H.Node, open: Bool = false) -> H.Node
export fn style() -> Css.Block
```
