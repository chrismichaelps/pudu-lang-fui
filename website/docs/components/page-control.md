---
title: Page Control
description: Dots for the pages of a paged view.
---

# Page Control

Dots for the pages of a paged view.

<div class="fui-preview"><a href="../previews/page-control.html">Open the Page Control preview</a></div>

## Installation

```bash
fui add page-control
```

## Usage

```pudu
PageControl.control("Onboarding pages").holding([PageControl.page("onboarding", 1), PageControl.page("onboarding", 2, true), PageControl.page("onboarding", 3), PageControl.page("onboarding", 4)])
```

## API

```pudu
/// The row of dots, named for assistive software.
export fn control(caption: Str) -> H.Node

/// The dot of page `index`, counted from one, in the group `name`.
export fn page(name: Str, index: Int, current: Bool = false) -> H.Node

/// The styles of a page control.
export fn style() -> Css.Block
```
