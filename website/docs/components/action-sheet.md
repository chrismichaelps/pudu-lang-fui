---
title: Action Sheet
description: Choices from the bottom edge.
---

# Action Sheet

Choices from the bottom edge.

<div class="fui-preview"><a href="../previews/action-sheet.html">Open the Action Sheet preview</a></div>

## Installation

```bash
fui add action-sheet
```

## Usage

```pudu
H.div().holding([
  ActionSheet.trigger("photo-actions", Button.props().variant(Button.Outline)).says("Photo options"),
  ActionSheet.sheet("photo-actions", "Photo options").holding([
    ActionSheet.group().holding([
      ActionSheet.heading().says("This photo is shared with three people."),
      ActionSheet.action("photo-actions").says("Save to library"),
      ActionSheet.action("photo-actions").says("Copy link"),
      ActionSheet.destructive("photo-actions").says("Delete photo")
    ]),
    ActionSheet.group().holding([ActionSheet.cancel("photo-actions").says("Cancel")])
  ])
])
```

## API

```pudu
/// A button that opens the action sheet `id`.
export fn trigger(id: Str, given: Button.Props) -> H.Node

/// An action sheet named for assistive software.
export fn sheet(id: Str, name: Str) -> H.Node

/// Choices drawn as one surface.
export fn group() -> H.Node

/// What the choices are about, at the top of a group.
export fn heading() -> H.Node

/// A choice that closes the sheet `id`.
export fn action(id: Str) -> H.Node

/// A choice that removes or cannot be undone.
export fn destructive(id: Str) -> H.Node

/// The choice that leaves things as they were; it belongs in the last group.
export fn cancel(id: Str) -> H.Node

/// The styles of an action sheet.
export fn style() -> Css.Block
```
