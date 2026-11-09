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
/// What is attached.
export type Kind = Document | Picture | Code

/// How media and text sit.
export type Orientation = Horizontal | Vertical

/// How the upload stands.
export type State = Ready | Uploading | Failed

/// An attachment with its name and size caption.
export fn attachment(kind: Kind, name: Str, size: Str, state: State) -> H.Node

/// Attachments in a row.
export fn group() -> H.Node

/// The attachment's name.
export fn title() -> H.Node

/// The attachment's supporting line.
export fn description() -> H.Node

/// Controls beside an attachment.
export fn actions() -> H.Node

/// A frame for an attachment composed from its parts.
export fn frame(kind: Kind, state: State, orientation: Orientation) -> H.Node

/// The styles of an attachment.
export fn style() -> Css.Block
```
