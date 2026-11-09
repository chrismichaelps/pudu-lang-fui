---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0009: Style blocks are flat arrays of steps

## Context

A method chain on 0.1.3 doubles in cost with each link
([pudu-lang#838](https://github.com/chrismichaelps/pudu-lang/issues/838)), so a thirty-rule chain never
finished.

## Decision

A block is `Css.block(name, [steps])`, each step a function from block to block. It reads flat at the
call site and costs one evaluation per step.

## Alternatives

- Intermediate `let` bindings: thirty names with no meaning.

## Referenced by

[[CHANGELOG]] · [[decisions/_MOC]]
