---
title: Sheet
description: A panel from an edge.
---

# Sheet

A panel from an edge.

<div class="fui-preview"><a href="../previews/sheet.html">Open the Sheet preview</a></div>

## Installation

```bash
fui add sheet
```

## Usage

```pudu
H.div().holding([
  Sheet.trigger("filters", Button.props().variant(Button.Outline)).says("Open"),
  Sheet.sheet("filters", "Edit profile", Sheet.End).holding([Sheet.header().holding([Sheet.title().says("Edit profile"), Sheet.description().says("Make changes to your profile here. Click save when you're done.")]), Field.group().css("padding-inline", "var(--fui-space-4)").holding([Field.field().holding([Field.label("sheet-name").says("Name"), Input.input("sheet-name", Input.props()).value("Pedro Duarte")]), Field.field().holding([Field.label("sheet-user").says("Username"), Input.input("sheet-user", Input.props()).value("@peduarte")])]), Sheet.footer().holding([Sheet.close("filters", Button.props()).says("Save changes"), Sheet.close("filters", Button.props().variant(Button.Outline)).says("Close")])])
])
```

## API

```pudu
/// Which edge a sheet comes from.
export type Side = Start | End | Top | Bottom

/// A button that opens the sheet `id`.
export fn trigger(id: Str, given: Button.Props) -> H.Node

/// A button that closes the sheet `id`.
export fn close(id: Str, given: Button.Props) -> H.Node

/// A panel named for assistive software.
export fn sheet(id: Str, name: Str, side: Side) -> H.Node

/// The sheet's headline.
export fn title() -> H.Node

/// What the sheet is about.
export fn description() -> H.Node

/// The sheet's closing row.
export fn footer() -> H.Node

/// The sheet's opening.
export fn header() -> H.Node

/// The styles of a sheet.
export fn style() -> Css.Block
```
