---
title: Badge
description: A small label in seven treatments.
---

# Badge

A small label in seven treatments.

<div class="fui-preview"><a href="../previews/badge.html">Open the Badge preview</a></div>

## Installation

```bash
fui add badge
```

## Usage

```pudu
H.div().css("display", "flex").css("flex-wrap", "wrap").css("gap", "var(--fui-space-2)").holding([Badge.badge(Badge.Primary).says("Badge"), Badge.badge(Badge.Secondary).says("Secondary"), Badge.badge(Badge.Destructive).says("Destructive"), Badge.badge(Badge.Outline).says("Outline"), Badge.badge(Badge.Success).says("Success")])
```

## API

```pudu
export type Variant = Primary | Secondary | Outline | Ghost | Link | Destructive | Success | Warning | Info
export fn badge(variant: Variant) -> H.Node
export fn style() -> Css.Block
```
