---
title: Pricing
description: Plans side by side.
---

# Pricing

Plans side by side.

<div class="fui-preview"><a href="../previews/pricing.html">Open the Pricing preview</a></div>

## Installation

```bash
fui add pricing
```

## Usage

```pudu
H.div().css("inline-size", "100%").holding([Pricing.pricing([Pricing.plan("Free", "$0", ["One project"], "#"), Pricing.plan("Pro", "$12", ["Everything"], "#", true)])])
```

## API

```pudu
export type Plan = { name: Str, price: Str, features: Array[Str], target: Str, featured: Bool }
export fn plan(name: Str, price: Str, features: Array[Str], target: Str, featured: Bool = false) -> Plan
export fn pricing(plans: Array[Plan]) -> H.Node
export fn style() -> Css.Block
```
