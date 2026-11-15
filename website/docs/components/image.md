---
title: Image
description: A framed picture.
---

# Image

A framed picture.

<div class="fui-preview"><a href="../previews/image.html">Open the Image preview</a></div>

## Installation

```bash
fui add image
```

## Usage

```pudu
let picture = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%237c8aa5'/%3E%3Ccircle cx='12' cy='3' r='1.5' fill='%23f4d58d'/%3E%3Cpath d='M0 9l5-5 4 3 3-2 4 4z' fill='%234a5a78'/%3E%3C/svg%3E"

Image.image(picture, "Hills under a low sun", "16 / 9").css("inline-size", "20rem").holding([Image.caption().says("Framed at sixteen by nine.")])
```

## API

```pudu
/// A picture framed at `ratio`, such as `16 / 9`, and described for assistive software.
export fn image(source: Str, description: Str, ratio: Str = "auto") -> H.Node

/// A line under the picture.
export fn caption() -> H.Node

/// The styles of an image.
export fn style() -> Css.Block
```
