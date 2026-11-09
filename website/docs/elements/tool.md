---
title: Tool
description: A tool call input to output.
---

# Tool

A tool call input to output.

<div class="fui-preview"><a href="../previews/tool.html">Open the Tool preview</a></div>

## Installation

```bash
fui add tool
```

## Usage

```pudu
column("26rem", [Trace.trace().holding([Tool.tool("run_tests", Trace.Done, "suite: all", "12 passed", true)])])
```

## API

```pudu
export fn tool(name: Str, status: Trace.Status, input: Str, output: Str, open: Bool = false) -> H.Node
export fn style() -> Css.Block
```
