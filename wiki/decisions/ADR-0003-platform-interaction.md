---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0003: Interaction comes from the platform

## Context

Pudu renders on the server. A client runtime would bring a second language, a build step, and a
hydration cost.

## Decision

Dialogs are `dialog` with invoker commands; menus and popovers use `popover`; accordions are `details`
sharing a `name`; tabs are radios. Only what has no declarative form carries a [[domain/Behavior]]: the drawer drags and the toast stacks
through scripts, while both still open, read, and close without one.

## Consequences

Components need a recent browser for the full experience. Without one, content is still reachable and
forms still submit.

## Referenced by

[[decisions/_MOC]] · [[seams/Browser]] · [[subsystems/Components]]
