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
    Alert.alert(Alert.Neutral).holding([Icon.icon(Icon.Info), Alert.title().says("Heads up"), Alert.description().says("You can add components with the generator.")]),
    Alert.alert(Alert.Destructive).holding([Icon.icon(Icon.ErrorCircle), Alert.title().says("Upload failed"), Alert.description().says("The file was too large.")])
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
