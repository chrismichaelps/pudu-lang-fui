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
Turn.turn("Which package managers are installed?", [Trace.trace().holding([Tool.tool("Ran pudu --version", Trace.Done, "pudu --version", "0.1.3"), Tool.tool("Ran git --version", Trace.Done, "git --version", "2.47.0"), Tool.tool("Failed to run npm --version", Trace.Failed, "npm --version", "command not found: npm", true)]), H.p().css("margin", "0").says("Pudu 0.1.3 and git 2.47 are installed, npm is not.")]).css("inline-size", "30rem")
```

## API

```pudu
/// A call to the tool `name`; `output` is empty while it runs.
export fn tool(name: Str, status: Trace.Status, input: Str, output: Str, open: Bool = false) -> H.Node

/// The styles of a tool.
export fn style() -> Css.Block
```
