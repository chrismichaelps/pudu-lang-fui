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
column("24rem", [Trace.trace().holding([Subagent.subagent("Explore the repository", Trace.Done, [line(Trace.Done, "Listed files")], H.p().says("Found three modules."), true)])])
```

## API

```pudu
export fn subagent(title: Str, status: Trace.Status, steps: Array[H.Node], result: H.Node, open: Bool = false) -> H.Node
export fn style() -> Css.Block
```
