---
title: Command
description: A search-and-run menu.
---

# Command

A search-and-run menu.

<div class="fui-preview"><a href="../previews/command.html">Open the Command preview</a></div>

## Installation

```bash
fui add command
```

## Usage

```pudu
column("24rem", [Command.command().css("border", "1px solid var(--fui-border)").css("border-radius", "var(--fui-radius-lg)").holding([
  Command.input("find", "Type a command or search..."),
  Command.list().holding([
    Command.group("Suggestions").holding([Command.item().holding([Icon.icon(Icon.Calendar), H.words("Calendar")]), Command.item().holding([Icon.icon(Icon.Smile), H.words("Search Emoji")]), Command.item().flag("disabled").holding([Icon.icon(Icon.Calculator), H.words("Calculator")])]),
    Command.separator(),
    Command.group("Settings").holding([Command.item().holding([Icon.icon(Icon.User), H.words("Profile"), Command.shortcut().says("⌘P")]), Command.item().holding([Icon.icon(Icon.CreditCard), H.words("Billing"), Command.shortcut().says("⌘B")]), Command.item().holding([Icon.icon(Icon.Settings), H.words("Settings"), Command.shortcut().says("⌘S")])]),
    Command.empty("No results found.")
  ])
])])
```

## API

```pudu
/// Items whose text holds the query, for filtering on the server.
export fn matching(items: &Array[Str], query: Str) -> Array[Str]

/// A command menu.
export fn command() -> H.Node

/// The search field, with the given name.
export fn input(name: Str, hint: Str) -> H.Node

/// The scrolling list.
export fn list() -> H.Node

/// A titled run of items.
export fn group(heading: Str) -> H.Node

/// One item as a button.
export fn item() -> H.Node

/// One item built on the given element, such as a link.
export fn of(element: H.Node) -> H.Node

/// What shows when nothing matches; hidden until the filter runs.
export fn empty(message: Str) -> H.Node

/// A key hint at the end of an item.
export fn shortcut() -> H.Node

/// A line between groups.
export fn separator() -> H.Node

/// The styles of a command menu.
export fn style() -> Css.Block
```
