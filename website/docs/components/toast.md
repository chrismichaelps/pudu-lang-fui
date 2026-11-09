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
export type Kind = Neutral | Success | Info | Warning | Failure | Loading
export type Position = TopStart | TopCenter | TopEnd | BottomStart | BottomCenter | BottomEnd
export type Mode = Light | Dark | System
export type Props =
export type Notice = { kind: Kind, duration: Int, dismissible: Bool, inverted: Bool, rich: Option[Bool] }
export fn props() -> Props
export fn notice() -> Notice
export trait Configuring
export trait Noticing
export fn toaster(given: Props) -> H.Node
export fn toast(id: Str, given: Notice) -> H.Node
export fn content() -> H.Node
export fn message() -> H.Node
export fn description() -> H.Node
export fn action() -> H.Node
export fn cancel(id: Str) -> H.Node
export fn close(id: Str) -> H.Node
export fn style() -> Css.Block
```
