---
title: Alert
description: A callout for information or trouble.
---

# Alert

A callout for information or trouble.

<div class="fui-preview"><a href="../previews/alert.html">Open the Alert preview</a></div>

## Installation

```bash
fui add alert
```

## Usage

```pudu
column("28rem", [
  Alert.alert(Alert.Neutral).holding([Icon.icon(Icon.Success), Alert.title().says("Payment successful"), Alert.description().says("Your payment of $29.99 has been processed. A receipt has been sent to your email address.")]),
  Alert.alert(Alert.Neutral).holding([Icon.icon(Icon.Info), Alert.title().says("New feature available"), Alert.description().says("We've added dark mode support. You can enable it in your account settings.")])
])
```

## API

```pudu
export type Variant = Neutral | Destructive | Success | Warning | Info
export fn alert(variant: Variant) -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn action() -> H.Node
export fn style() -> Css.Block
```
