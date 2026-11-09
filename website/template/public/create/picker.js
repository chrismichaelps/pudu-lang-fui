import { element } from "./dom.js";

function choiceButton(option, onPick, className, content) {
  return element("button", { type: "button", class: className, title: option.label, "aria-label": option.label, "aria-pressed": "false", value: option.value, on: { click: () => onPick(option.value) } }, content);
}

const RENDERERS = {
  tiles: (option, onPick) => choiceButton(option, onPick, "fui-design-tile", [
    element("span", { class: "fui-design-tile-mark", style: option.mark || "", "aria-hidden": "true" }),
    element("span", { text: option.label }),
  ]),
  swatches: (option, onPick) => choiceButton(option, onPick, "fui-design-dot", [
    element("span", { style: `background: ${option.swatch}`, "aria-hidden": "true" }),
  ]),
  segments: (option, onPick) => choiceButton(option, onPick, "fui-design-segment", [element("span", { text: option.label })]),
};

function markPressed(holder, selected) {
  holder.querySelectorAll("button").forEach((node) => node.setAttribute("aria-pressed", String(node.value === selected)));
}

function createList({ label, kind, onPick }) {
  const holder = element("div", { class: `fui-design-${kind}`, role: "group", "aria-label": label });
  let drawn = "";

  return {
    node: holder,
    update(options, selected) {
      const signature = options.map((option) => option.value).join();

      if (signature !== drawn) {
        holder.replaceChildren(...options.map((option) => RENDERERS[kind](option, onPick)));
        drawn = signature;
      }

      markPressed(holder, selected);
    },
  };
}

function createSelect({ label, onPick }) {
  const select = element("select", { class: "fui-design-select", "aria-label": label, on: { change: (event) => onPick(event.target.value) } });
  let drawn = "";

  return {
    node: select,
    update(options, selected) {
      const signature = options.map((option) => option.value).join();

      if (signature !== drawn) {
        select.replaceChildren(...options.map((option) => element("option", { value: option.value, text: option.label })));
        drawn = signature;
      }

      select.value = selected;
    },
  };
}

export function createControl({ label, kind, onPick }) {
  const control = kind === "select" ? createSelect({ label, onPick }) : createList({ label, kind, onPick });
  const value = element("span", { class: "fui-design-value" });

  return {
    node: element("div", { class: "fui-design-field" }, [
      element("div", { class: "fui-design-field-head" }, [element("span", { text: label }), value]),
      control.node,
    ]),
    update(options, selected) {
      control.update(options, selected);
      value.textContent = (options.find((option) => option.value === selected) || options[0]).label;
    },
  };
}
