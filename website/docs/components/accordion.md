---
title: Accordion
description: Sections kept exclusive by the platform.
---

# Accordion

Sections kept exclusive by the platform.

<div class="fui-preview"><a href="../previews/accordion.html">Open the Accordion preview</a></div>

## Installation

```bash
fui add accordion
```

## Usage

```pudu
column("24rem", [Accordion.accordion().holding([
        Accordion.item("faq", "Is it accessible?", true).holding([Accordion.content().says("Yes. It uses the platform's own disclosure element.")]),
        Accordion.item("faq", "Does it need a script?").holding([Accordion.content().says("No. Sections sharing a name open one at a time.")]),
        Accordion.item("faq", "Can I restyle it?").holding([Accordion.content().says("Add it to your project and edit the file.")])
      ])])
```

## API

```pudu
export fn accordion() -> H.Node
export fn item(group: Str, heading: Str, open: Bool = false) -> H.Node
export fn content() -> H.Node
export fn style() -> Css.Block
```
