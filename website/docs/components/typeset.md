---
title: Typeset
description: Styles rendered documents from three controls.
---

# Typeset

Styles rendered documents from three controls.

<div class="fui-preview"><a href="../previews/typeset.html">Open the Typeset preview</a></div>

## Installation

```bash
fui add typeset
```

## Usage

```pudu
Typeset.typeset(Typeset.props()).raw("<h2>Rendered document</h2><p>A paragraph with <code>code</code> and a <a href='#'>link</a>.</p><ul><li>One</li><li>Two</li></ul>")
```

## API

```pudu
/// The three controls of a document's rhythm.
export type Props = { size: Str, leading: Str, flow: Str }

/// Fifteen-pixel text, relaxed leading, even flow.
export fn props() -> Props

/// One method per prop.
export trait Configuring

/// A container whose contents read as a document.
export fn typeset(given: Props) -> H.Node

/// The styles of a document.
export fn style() -> Css.Block
```
