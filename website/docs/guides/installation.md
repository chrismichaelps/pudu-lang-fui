---
title: Installation
description: Add the package and set your project up.
---

# Installation

Add the package to a Pudu project. Name the version, since a release that is only days old is refused without it:

```bash
pudu install @chrismichaelps/pudu-lang-fui@0.1.0
```

Build the generator once, so `fui` is a command you can run:

```bash
pudu build deps/@chrismichaelps/pudu-lang-fui/tools/Fui.pudu -o fui
```

Set the project up and add your first component:

```bash
./fui init
./fui add button
```

Render a page:

```pudu
module Main

import Std.Html.Build as H
import PuduLangFui as Fui
import Ui.Catalog as Catalog
import Ui.Primitives.Button as Button
import Ui.Theme as Theme

fn main() -> Int {
  let body = H.main().holding([Button.button(Button.props()).says("Hello")])
  let page = Fui.page("Home", Theme.theme(), Catalog.blocks())
  let _printed = print(Fui.document(&page, body))

  0
}
```

The document holds the styles for what the body rendered, and nothing else.
