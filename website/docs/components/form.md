---
title: Form
description: Fields bound to a validator's messages.
---

# Form

Fields bound to a validator's messages.

<div class="fui-preview"><a href="../previews/form.html">Open the Form preview</a></div>

## Installation

```bash
fui add form
```

## Usage

```pudu
column("22rem", [Form.form("#").holding([Form.item(&mapOf([("user", ["Username is required."])]), "user", "Username", Input.input("user", Input.props()), "Your public name."), Button.submit(Button.props()).says("Submit")])])
```

## API

```pudu
export type Problems = Map[Str, Array[Str]]
export fn clean() -> Problems
export fn form(action: Str) -> H.Node
export fn item(problems: &Problems, name: Str, caption: Str, control: H.Node, hint: Str) -> H.Node
export fn style() -> Css.Block
```
