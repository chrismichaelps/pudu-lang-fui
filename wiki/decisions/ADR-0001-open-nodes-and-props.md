---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0001: Props in, open node out

## Context

The language has default arguments but no named arguments, and `Std.Html.Build` already gives every
node a chain for attributes and content.

## Decision

A component takes its `Props` record, or a closed choice when it has one prop, and answers an `H.Node`. Content and attributes are
added with the standard chain: `Button.button(Button.props().size(Button.Small)).id("x").says("Go")`.
A [[domain/Part]] with nothing to configure takes no argument.

## Rationale

One vocabulary. Nothing new to learn for content or attributes, partial application falls out of
values, and a project's own nodes mix freely.

## Alternatives

- Positional variant arguments: terse, but a third boolean is unreadable and adding a prop breaks
  callers.
- A trait of variant methods on `H.Node`: two components could not both have `.small()`.
- A wrapper component type: every project node would need adapting.
- A `children` parameter: props would end up far from the call or children far from the content.

## Validation

Predicted: a typical call fits one line. Actual is measured by the examples.

## Referenced by

[[decisions/_MOC]] · [[grammar/pudu]] · [[handoffs/2026-11-09-initial-system]] · [[subsystems/Components]]
