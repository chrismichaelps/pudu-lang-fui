import { copied, element } from "./dom.js";

function closing(dialog) {
  return element("button", { type: "button", class: "fui-design-action", text: "Close", on: { click: () => dialog.close() } });
}

export function createGetCode(codeOf) {
  const init = element("code");
  const apply = element("code");
  const dialog = element("dialog", { class: "fui-design-dialog", closedby: "any" });
  const line = (code) => element("div", { class: "fui-design-command" }, [
    code,
    element("button", { type: "button", class: "fui-design-action", text: "Copy", on: { click: (event) => copied(event.currentTarget, code.textContent) } }),
  ]);

  dialog.append(
    element("h2", { text: "Use this design" }),
    element("p", { text: "Start a project with this design, or apply it to one you already have." }),
    line(init),
    line(apply),
    element("footer", {}, [closing(dialog)]),
  );

  return {
    node: dialog,
    open() {
      init.textContent = `fui init --preset ${codeOf()}`;
      apply.textContent = `fui apply ${codeOf()}`;
      dialog.showModal();
    },
  };
}

export function createOpenPreset(onOpen) {
  const input = element("input", { class: "fui-design-input", "aria-label": "Design code", placeholder: "Paste a design code", spellcheck: "false" });
  const problem = element("p", { class: "fui-design-problem", role: "alert" });
  const dialog = element("dialog", { class: "fui-design-dialog", closedby: "any" });
  const form = element("form", { on: { submit: (event) => {
    event.preventDefault();

    if (onOpen(input.value.trim())) dialog.close();
    else problem.textContent = "That is not a design code.";
  } } }, [
    element("h2", { text: "Paste a code" }),
    input,
    problem,
    element("footer", {}, [closing(dialog), element("button", { type: "submit", class: "fui-design-action fui-design-action-primary", text: "Open" })]),
  ]);

  dialog.append(form);

  return {
    node: dialog,
    open() {
      input.value = "";
      problem.textContent = "";
      dialog.showModal();
    },
  };
}
