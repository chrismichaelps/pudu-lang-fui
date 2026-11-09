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
/// A button that opens the alert dialog `id`.
export fn trigger(id: Str, given: Button.Props) -> H.Node

/// A control that dismisses the decision.
export fn cancel(id: Str, given: Button.Props) -> H.Node

/// A modal that closes only through its controls.
export fn alertDialog(id: Str, name: Str) -> H.Node

/// The dialog's headline.
export fn title() -> H.Node

/// What the decision means.
export fn description() -> H.Node

/// The dialog's closing row of controls.
export fn footer() -> H.Node

/// A control carrying out the decision, inside a form or wired by the caller.
export fn action(id: Str, given: Button.Props) -> H.Node

/// The dialog's opening.
export fn header() -> H.Node

/// An icon or image over the headline.
export fn media() -> H.Node

/// The styles of an alert dialog.
export fn style() -> Css.Block
```
