---
title: Alert Dialog
description: A modal asking for a decision.
---

# Alert Dialog

A modal asking for a decision.

<div class="fui-preview"><a href="../previews/alert-dialog.html">Open the Alert Dialog preview</a></div>

## Installation

```bash
fui add alert-dialog
```

## Usage

```pudu
H.div().holding([
    AlertDialog.trigger("erase", Button.props().variant(Button.Outline)).says("Show Dialog"),
    AlertDialog.alertDialog("erase", "Delete account").holding([
        AlertDialog.header().holding([AlertDialog.title().says("Are you absolutely sure?"), AlertDialog.description().says("This action cannot be undone. This will permanently delete your account from our servers.")]),
        AlertDialog.footer().holding([AlertDialog.cancel("erase", Button.props().variant(Button.Outline)).says("Cancel"), AlertDialog.action("erase", Button.props()).says("Continue")])
      ])
  ])
```

## API

```pudu
export fn trigger(id: Str, given: Button.Props) -> H.Node
export fn cancel(id: Str, given: Button.Props) -> H.Node
export fn alertDialog(id: Str, name: Str) -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn footer() -> H.Node
export fn action(id: Str, given: Button.Props) -> H.Node
export fn header() -> H.Node
export fn media() -> H.Node
export fn style() -> Css.Block
```
