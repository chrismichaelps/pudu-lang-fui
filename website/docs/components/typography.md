---
title: Typography
description: Text in every named role.
---

# Typography

Text in every named role.

<div class="fui-preview"><a href="../previews/typography.html">Open the Typography preview</a></div>

## Installation

```bash
fui add typography
```

## Usage

```pudu
column("28rem", [Typography.text(Typography.H1).says("The heading"), Typography.text(Typography.Lead).says("A lead paragraph."), Typography.text(Typography.Paragraph).says("Body text reads at a comfortable size.")])
```

## API

```pudu
export type Kind = H1 | H2 | H3 | H4 | Paragraph | Blockquote | InlineCode | Lead | Large | Small | Muted
export fn text(kind: Kind) -> H.Node
export fn style() -> Css.Block
```
