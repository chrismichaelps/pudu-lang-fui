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
column("28rem", [Field.group().holding([
  Field.set().holding([Field.legend().says("Payment Method"), Field.description().says("All transactions are secure and encrypted"), Field.group().holding([
    Field.field().holding([Field.label("card-name").says("Name on Card"), Input.input("card-name", Input.props()).placeholder("Evil Rabbit")]),
    Field.field().holding([Field.label("card-number").says("Card Number"), Input.input("card-number", Input.props()).placeholder("1234 5678 9012 3456"), Field.description().says("Enter your 16-digit card number")]),
    H.div().css("display", "grid").css("grid-template-columns", "repeat(3, 1fr)").css("gap", "var(--fui-space-4)").holding([
      Field.field().holding([Field.label("card-month").says("Month"), Select.select("card-month").css("inline-size", "100%").holding([Select.placeholder("MM"), Select.option("01", "01"), Select.option("02", "02")])]),
      Field.field().holding([Field.label("card-year").says("Year"), Select.select("card-year").css("inline-size", "100%").holding([Select.placeholder("YYYY"), Select.option("2026", "2026"), Select.option("2027", "2027")])]),
      Field.field().holding([Field.label("card-cvv").says("CVV"), Input.input("card-cvv", Input.props()).placeholder("123")])
    ])
  ])]),
  Field.separator(""),
  Field.set().holding([Field.legend().says("Billing Address"), Field.description().says("The billing address associated with your payment method"), Field.group().holding([Field.oriented(Field.Horizontal, false).holding([Checkbox.checkbox("same-address", Checkbox.props().checked()), Label.label("same-address").says("Same as shipping address")])])]),
  Field.field().holding([Field.label("comments").says("Comments"), Textarea.textarea("comments").placeholder("Add any additional comments")]),
  Field.oriented(Field.Horizontal, false).holding([Button.submit(Button.props()).says("Submit"), Button.button(Button.props().variant(Button.Outline)).says("Cancel")])
])])
```

## API

```pudu
/// How a label and control sit.
export type Orientation = Vertical | Horizontal | Responsive

/// A field with its label above its control.
export fn field() -> H.Node

/// A field in the given orientation; `invalid` tints its label.
export fn oriented(orientation: Orientation, invalid: Bool) -> H.Node

/// The field's caption for the control with the given id.
export fn label(control: Str) -> H.Node

/// Text and description stacked together.
export fn content() -> H.Node

/// Supporting text.
export fn description() -> H.Node

/// Nothing for no messages, one line for one, a list for several.
export fn error(messages: &Array[Str]) -> H.Node

/// Fields stacked together.
export fn group() -> H.Node

/// A set of related fields.
export fn set() -> H.Node

/// A set's caption.
export fn legend() -> H.Node

/// A heading for a field whose control is not a labelled input.
export fn title() -> H.Node

/// A line between fields, with optional text on it.
export fn separator(caption: Str) -> H.Node

/// The styles of a field.
export fn style() -> Css.Block
```
