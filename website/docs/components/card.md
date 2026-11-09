---
title: Card
description: A surface with named parts.
---

# Card

A surface with named parts.

<div class="fui-preview"><a href="../previews/card.html">Open the Card preview</a></div>

## Installation

```bash
fui add card
```

## Usage

```pudu
loginCard(["Login to your account", "Enter your email below to login to your account", "Sign Up", "Email", "Password", "Forgot your password?", "Login", "Login with Google"])
```

## API

```pudu
export type Size = Regular | Compact
export fn card() -> H.Node sized(Regular) }
export fn sized(size: Size) -> H.Node
export fn header() -> H.Node
export fn title() -> H.Node
export fn titled(heading: H.Node) -> H.Node heading.slot("card-title") }
export fn description() -> H.Node
export fn action() -> H.Node
export fn content() -> H.Node
export fn footer() -> H.Node
export fn style() -> Css.Block
```
