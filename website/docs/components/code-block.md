---
title: Code Block
description: Code, output, or a diff.
---

# Code Block

Code, output, or a diff.

<div class="fui-preview"><a href="../previews/code-block.html">Open the Code Block preview</a></div>

## Installation

```bash
fui add code-block
```

## Usage

```pudu
column("28rem", [CodeBlock.codeBlock("main.pudu", &[CodeBlock.line("fn main() -> Int \{"), CodeBlock.removed("  1"), CodeBlock.added("  0"), CodeBlock.line("\}")], CodeBlock.props())])
```

## API

```pudu
export type LineKind = Context | Added | Removed
export type Props = { numbered: Bool, start: Int, wrapped: Bool, maximumHeight: Str, highlighted: Array[Int] }
export type Line = { text: Str, kind: LineKind }
export fn props() -> Props
export trait Configuring
export fn line(text: Str) -> Line
export fn added(text: Str) -> Line
export fn removed(text: Str) -> Line
export fn linesOf(text: Str) -> Array[Line]
export fn codeBlock(title: Str, lines: &Array[Line], given: Props) -> H.Node
export fn style() -> Css.Block
```
