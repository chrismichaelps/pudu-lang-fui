---
title: Attachment
description: A file with upload state.
---

# Attachment

A file with upload state.

<div class="fui-preview"><a href="../previews/attachment.html">Open the Attachment preview</a></div>

## Installation

```bash
fui add attachment
```

## Usage

```pudu
Attachment.group().holding([Attachment.attachment(Attachment.Document, "notes.txt", "2 KB", Attachment.Ready), Attachment.attachment(Attachment.Picture, "photo.png", "1 MB", Attachment.Uploading), Attachment.attachment(Attachment.Code, "main.pudu", "4 KB", Attachment.Failed)])
```

## API

```pudu
export type Kind = Document | Picture | Code
export type Orientation = Horizontal | Vertical
export type State = Ready | Uploading | Failed
export fn attachment(kind: Kind, name: Str, size: Str, state: State) -> H.Node
export fn group() -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn actions() -> H.Node
export fn frame(kind: Kind, state: State, orientation: Orientation) -> H.Node
export fn style() -> Css.Block
```
