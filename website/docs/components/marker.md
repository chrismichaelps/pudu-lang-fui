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
/// Which sort of note a marker is.
export type Kind = Status | System | Row | Divider

/// A note of the given kind.
export fn marker(kind: Kind) -> H.Node

/// The styles of a marker.
export fn style() -> Css.Block
```
