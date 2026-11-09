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
Toast.toaster(Toast.props().position(Toast.BottomCenter).rich()).holding([Toast.toast("saved", Toast.notice().kind(Toast.Success).duration(0)).holding([Toast.message().says("Event created"), Toast.close("saved"), Toast.description().says("Friday at 5:57 PM")])])
```

## API

```pudu
export type Kind = Neutral | Success | Info | Warning | Failure | Loading
export type Position = TopStart | TopCenter | TopEnd | BottomStart | BottomCenter | BottomEnd
export type Props = position: Position, expanded: Bool, rich: Bool, closable: Bool, visible: Int }
export type Notice = kind: Kind, duration: Int, dismissible: Bool, inverted: Bool }
export fn props() -> Props
export fn notice() -> Notice Notice{kind: Neutral, duration: 4000, dismissible: true, inverted: false} }
export trait Configuring
export trait Noticing
export fn toaster(given: Props) -> H.Node
export fn toast(id: Str, given: Notice) -> H.Node
export fn message() -> H.Node
export fn description() -> H.Node
export fn action(given: Button.Props) -> H.Node
export fn cancel(id: Str) -> H.Node
export fn close(id: Str) -> H.Node
export fn style() -> Css.Block
```
