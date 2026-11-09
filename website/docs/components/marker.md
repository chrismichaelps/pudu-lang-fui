---
title: Marker
description: An inline note in a conversation.
---

# Marker

An inline note in a conversation.

<div class="fui-preview"><a href="../previews/marker.html">Open the Marker preview</a></div>

## Installation

```bash
fui add marker
```

## Usage

```pudu
column("24rem", [Marker.marker(Marker.Status).says("Reading files"), Marker.marker(Marker.System).says("Conversation resumed"), Marker.marker(Marker.Divider).says("Today")])
```

## API

```pudu
export type Kind = Status | System | Row | Divider
export fn marker(kind: Kind) -> H.Node
export fn style() -> Css.Block
```
