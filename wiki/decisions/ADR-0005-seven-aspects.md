---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0005: A theme is seven aspect records

## Decision

[[domain/Theme]] holds one record per [[domain/Aspect]], and each record derives its tokens, so adding
a field adds a token. Colors are numeric OKLCH pairs rendered with `light-dark()`, which gives dark
mode with no script and no flash, and lets the contrast of every foreground and surface be audited.

## Alternatives

- A flat map of names to text: no audit is possible and a typo is silent.
- Two selector blocks for light and dark: twice the text and a chance to diverge.

## Referenced by

[[CHANGELOG]] · [[decisions/_MOC]] · [[subsystems/Styling]]
