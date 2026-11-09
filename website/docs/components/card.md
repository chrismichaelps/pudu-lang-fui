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
/// How much padding a card keeps.
export type Size = Regular | Compact

/// A card with regular padding.
export fn card() -> H.Node

/// A card with the given padding.
export fn sized(size: Size) -> H.Node

/// The card's opening: title, description, and any action.
export fn header() -> H.Node

/// The card's title, as a `div`.
export fn title() -> H.Node

/// The card's title as a heading of the given node, such as `H.h2()`.
export fn titled(heading: H.Node) -> H.Node

/// Supporting text under the title.
export fn description() -> H.Node

/// A control placed at the end of the header.
export fn action() -> H.Node

/// The card's body.
export fn content() -> H.Node

/// The card's closing row.
export fn footer() -> H.Node

/// The styles of a card.
export fn style() -> Css.Block
```
