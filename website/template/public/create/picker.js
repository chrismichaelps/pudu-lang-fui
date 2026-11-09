import { PANEL_GAP, SCREEN_MARGIN } from "./constants.js";
import { element } from "./dom.js";

function placeBeside(list, trigger, panel) {
  const anchor = trigger.getBoundingClientRect();
  const frame = panel.getBoundingClientRect();
  const height = list.offsetHeight;
  const narrow = innerWidth < 768;
  const left = narrow ? SCREEN_MARGIN : frame.right + PANEL_GAP;
  const lowest = innerHeight - height - SCREEN_MARGIN;

  list.style.left = `${left}px`;
  list.style.top = `${Math.max(SCREEN_MARGIN, Math.min(anchor.top, lowest))}px`;
}

function optionNode(option, onPick) {
  const content = [];

  if (option.swatch) content.push(element("span", { class: "fui-swatch", style: `background: ${option.swatch}` }));

  content.push(element("span", { text: option.label, style: option.family ? `font-family: '${option.family}', sans-serif` : "" }));

  return element("button", { type: "button", class: "fui-picker-option", role: "option", value: option.value, on: { click: () => onPick(option.value) } }, content);
}

function moveFocus(list, step) {
  const options = [...list.querySelectorAll(".fui-picker-option")];
  const next = options.indexOf(list.ownerDocument.activeElement) + step;

  options[(next + options.length) % options.length].focus();
}

export function createPicker({ label, panel, onPick }) {
  const value = element("span", { class: "fui-picker-value" });
  const mark = element("span", { class: "fui-picker-mark" });
  const list = element("div", { class: "fui-picker-list", role: "listbox", "aria-label": label, popover: "auto" });
  const trigger = element("button", { type: "button", class: "fui-picker", "aria-haspopup": "listbox" }, [
    element("span", { class: "fui-picker-text" }, [element("span", { class: "fui-picker-label", text: label }), value]),
    mark,
  ]);

  trigger.addEventListener("click", () => list.togglePopover());
  list.addEventListener("toggle", (event) => {
    if (event.newState !== "open") return;

    placeBeside(list, trigger, panel);
    (list.querySelector("[aria-selected=true]") || list.firstElementChild).focus();
  });
  list.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, event.key === "ArrowDown" ? 1 : -1);
    }
  });

  function update(options, selected) {
    const chosen = options.find((option) => option.value === selected) || options[0];

    value.textContent = chosen.label;
    mark.style.background = chosen.swatch || "";
    mark.hidden = !chosen.swatch;
    list.replaceChildren(...options.map((option) => optionNode(option, (picked) => {
      list.hidePopover();
      trigger.focus();
      onPick(picked);
    })));
    list.querySelectorAll(".fui-picker-option").forEach((node) => node.setAttribute("aria-selected", String(node.value === selected)));
  }

  return { nodes: [trigger, list], update };
}
