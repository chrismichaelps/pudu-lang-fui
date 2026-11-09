---
title: Introduction
description: Components you own, in the language you write.
---

# Introduction

**This is not a component library. It is how you build yours.**

A traditional library hands you finished components and leaves you overriding their styles. Here, a
component is one short Pudu file that holds its props, its markup, and its styles. Add it to your
project and it is yours to edit.

## Principles

| Principle | What it means |
| --- | --- |
| Open source | The top layer of every component is a file in your project. |
| Composition | Every component answers an open node that you keep building with the standard chain. |
| Distribution | A generator copies components into your project; any package can be a registry. |
| Good defaults | The set looks right on its own and works together. |
| Typed | A misspelled variant or prop is a compile error. |

## What is different

- **No client runtime.** Dialogs, menus, tabs, and accordions come from the browser itself. Three
  components carry a short optional script, and only on pages that use them.
- **No build step.** The stylesheet comes from the components a page rendered.
- **No specificity fights.** Library rules live in a cascade layer, so your rule always wins.
- **Legible by construction.** Every theme is audited for contrast in both color modes.
