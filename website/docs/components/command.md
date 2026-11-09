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
export fn matching(items: &Array[Str], query: Str) -> Array[Str]
export fn command() -> H.Node
export fn input(name: Str, hint: Str) -> H.Node
export fn list() -> H.Node
export fn group(heading: Str) -> H.Node
export fn item() -> H.Node of(H.button().kind("button")) }
export fn of(element: H.Node) -> H.Node element.slot("command-item") }
export fn empty(message: Str) -> H.Node
export fn shortcut() -> H.Node
export fn separator() -> H.Node
export fn style() -> Css.Block
```
