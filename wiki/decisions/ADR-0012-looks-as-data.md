---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0012: A look is a table of rules

## Decision

Every part's appearance lives in generated data, one table per look, in its own cascade layer above the
components. A theme carries one table; a page emits only the rules of the slots it renders. A complete
design is ten readable names in one dot-separated code, resolved by [[src/PuduLangFui/Theme/Presets/Design]].

## Consequences

Component files keep structure and behavior, and a look can restyle all of them without touching one.
Rules selected on a dialog or popover must never set `display` while closed, and a pseudo-element used
as a part must not also carry a hit area. Each look is checked to be well formed, because one unbalanced
selector makes the browser discard every rule after it.

## Referenced by

[[CHANGELOG]] · [[decisions/_MOC]] · [[handoffs/2026-11-09-initial-system]]
