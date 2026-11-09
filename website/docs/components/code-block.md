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
/// What a line of a diff did.
export type LineKind = Context | Added | Removed

/// How lines are presented.
export type Props = { numbered: Bool, start: Int, wrapped: Bool, maximumHeight: Str, highlighted: Array[Int] }

/// One line and what happened to it.
export type Line = { text: Str, kind: LineKind }

/// Numbered from one, unwrapped, at full height.
export fn props() -> Props

/// One method per prop.
export trait Configuring

/// An unchanged line.
export fn line(text: Str) -> Line

/// A line that was added.
export fn added(text: Str) -> Line

/// A line that was removed.
export fn removed(text: Str) -> Line

/// Text split into unchanged lines.
export fn linesOf(text: Str) -> Array[Line]

/// The given lines under a title.
export fn codeBlock(title: Str, lines: &Array[Line], given: Props) -> H.Node

/// The styles of a code block.
export fn style() -> Css.Block
```
