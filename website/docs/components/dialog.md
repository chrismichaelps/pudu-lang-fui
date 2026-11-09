---
title: Dialog
description: A modal window on the platform.
---

# Dialog

A modal window on the platform.

<div class="fui-preview"><a href="../previews/dialog.html">Open the Dialog preview</a></div>

## Installation

```bash
fui add dialog
```

## Usage

```pudu
H.div().holding([
    Dialog.trigger("edit", Button.props().variant(Button.Outline)).says("Open Dialog"),
    Dialog.dialog("edit", "Edit profile").holding([
        Dialog.header().holding([Dialog.title().says("Edit profile"), Dialog.description().says("Make changes to your profile here. Click save when you're done.")]),
        Field.group().holding([Field.field().holding([Field.label("who").says("Name"), Input.input("who", Input.props()).value("Pedro Duarte")]), Field.field().holding([Field.label("handle-name").says("Username"), Input.input("handle-name", Input.props()).value("@peduarte")])]),
        Dialog.footer().holding([Dialog.close("edit", Button.props().variant(Button.Outline)).says("Cancel"), Dialog.close("edit", Button.props()).says("Save changes")])
      ])
  ])
```

## API

```pudu
export fn trigger(id: Str, given: Button.Props) -> H.Node
export fn close(id: Str, given: Button.Props) -> H.Node
export fn dialog(id: Str, name: Str) -> H.Node
export fn plain(id: Str, name: Str) -> H.Node
export fn header() -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn footer() -> H.Node
export fn style() -> Css.Block
```
