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
        Accordion.item("faq", "What are your shipping options?", true).holding([Accordion.content().says("We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.")]),
        Accordion.item("faq", "What is your return policy?").holding([Accordion.content().says("Returns accepted within 30 days. Items must be unused and in original packaging.")]),
        Accordion.item("faq", "How can I contact customer support?").holding([Accordion.content().says("Reach us by email, live chat, or phone. We respond within 24 hours.")])
      ])])
```

## API

```pudu
export fn accordion() -> H.Node
export fn item(group: Str, heading: Str, open: Bool = false) -> H.Node
export fn content() -> H.Node
export fn style() -> Css.Block
```
