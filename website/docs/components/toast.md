---
title: Toast
description: Stacked messages outside the flow.
---

# Toast

Stacked messages outside the flow.

<div class="fui-preview"><a href="../previews/toast.html">Open the Toast preview</a></div>

## Installation

```bash
fui add toast
```

## Usage

```pudu
Toast.toaster(Toast.props().position(Toast.BottomCenter).rich()).holding([Toast.toast("saved", Toast.notice().kind(Toast.Success).duration(0)).holding([Toast.content().holding([Toast.message().says("Event created"), Toast.description().says("Friday at 5:57 PM")]), Toast.close("saved")])])
```

## API

```pudu
/// What a toast reports.
export type Kind = Neutral | Success | Info | Warning | Failure | Loading

/// Which corner or edge toasts collect at.
export type Position = TopStart | TopCenter | TopEnd | BottomStart | BottomCenter | BottomEnd

/// Which color mode a region uses.
export type Mode = Light | Dark | System

/// How a region behaves.
export type Props =

/// How one toast behaves.
export type Notice = { kind: Kind, duration: Int, dismissible: Bool, inverted: Bool, rich: Option[Bool] }

/// A bottom-end region showing three at a time, closing toasts after four seconds.
export fn props() -> Props

/// A neutral toast using the region's duration, which a person can dismiss.
export fn notice() -> Notice

/// One method per prop.
export trait Configuring

/// One method per notice prop.
export trait Noticing

/// The region toasts collect in, with what its script clones new ones from.
export fn toaster(given: Props) -> H.Node

/// A toast shown as rendered, its icon in place.
export fn toast(id: Str, given: Notice) -> H.Node

/// The toast's text, holding its message and description.
export fn content() -> H.Node

/// The toast's message.
export fn message() -> H.Node

/// Further detail.
export fn description() -> H.Node

/// A control doing what the toast offers; it submits whatever form holds it.
export fn action() -> H.Node

/// A control declining what the toast offers.
export fn cancel(id: Str) -> H.Node

/// A control closing the toast `id`.
export fn close(id: Str) -> H.Node

/// The styles of toasts.
export fn style() -> Css.Block
```
