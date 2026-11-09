---
title: Field
description: A control with label and errors.
---

# Field

A control with label and errors.

<div class="fui-preview"><a href="../previews/field.html">Open the Field preview</a></div>

## Installation

```bash
fui add field
```

## Usage

```pudu
column("22rem", [Field.group().holding([
        Field.field().holding([Field.label("email").says("Email"), Input.input("email", Input.props().kind("email")).placeholder("you@example.com"), Field.description().says("We never share it.")]),
        Field.oriented(Field.Vertical, true).holding([Field.label("handle").says("Handle"), Input.input("handle", Input.props().invalid()), Field.error(&["That handle is taken."])])
      ])])
```

## API

```pudu
export type Orientation = Vertical | Horizontal | Responsive
export fn field() -> H.Node oriented(Vertical, false) }
export fn oriented(orientation: Orientation, invalid: Bool) -> H.Node
export fn label(control: Str) -> H.Node Label.label(control) }
export fn content() -> H.Node
export fn description() -> H.Node
export fn error(messages: &Array[Str]) -> H.Node
export fn group() -> H.Node
export fn set() -> H.Node
export fn legend() -> H.Node
export fn title() -> H.Node
export fn separator(caption: Str) -> H.Node
export fn style() -> Css.Block
```
