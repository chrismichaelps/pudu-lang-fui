---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0002: Styles beside markup, as typed blocks

## Context

A component must be editable as one file, need no build tool outside Pudu, and pay only for what a
page uses.

## Decision

Each component declares a [[domain/Block]] in its own file as a flat array of steps: `Css.base`,
`Css.variant`, `Css.hover`, `Css.slot`. Declarations are plain CSS text with `$token` shorthand. The page finds the slots
it rendered and inlines only the blocks they belong to.

## Alternatives

- Utility classes: needs a compiler and a class-merging layer.
- CSS files beside the source: a second file to own, and no way to read them from a dependency
  at run time.
- One typed function per CSS property: enormous surface, and no way to paste CSS.

## Referenced by

[[CHANGELOG]] · [[decisions/_MOC]] · [[subsystems/Styling]]
