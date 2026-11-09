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
/// One plan on offer.
export type Plan = { name: Str, price: Str, features: Array[Str], target: Str, featured: Bool }

/// A plan on offer.
export fn plan(name: Str, price: Str, features: Array[Str], target: Str, featured: Bool = false) -> Plan

/// The plans in a grid.
export fn pricing(plans: Array[Plan]) -> H.Node

/// The styles of pricing.
export fn style() -> Css.Block
```
