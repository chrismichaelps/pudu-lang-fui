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
export type Props = { size: Str, leading: Str, flow: Str }
export fn props() -> Props
export trait Configuring
export fn typeset(given: Props) -> H.Node
export fn style() -> Css.Block
```
