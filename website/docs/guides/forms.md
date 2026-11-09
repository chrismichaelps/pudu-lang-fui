---
title: Forms
description: Fields bound to any validator's messages.
---

# Forms

`Form.item` lays out a label, a control, a description, and whatever was refused. It reads refusals
from a map of field name to messages, which any validator can produce.

```pudu
Form.form("/signup").holding([
  Form.item(&problems, "email", "Email", Input.input("email", Input.props().kind("email")), ""),
  Button.submit(Button.props()).says("Create account")
])
```

The browser checks what it can with `required` and input types, and shows errors after interaction
through `:user-invalid`. The server has the last word.
