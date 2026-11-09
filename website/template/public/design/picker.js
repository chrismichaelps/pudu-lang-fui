import { element } from "./dom.js";

const LIST_MARGIN = 8;
const LIST_GAP = 4;
const LIST_TALLEST = 288;
const TYPING_PAUSE = 500;

let pickerCount = 0;

export function icon(svg) {
  const node = element("span", { class: "fui-design-icon", "aria-hidden": "true" });

  node.innerHTML = svg;

  return node;
}

function choiceButton(option, onPick, className, content) {
  return element("button", { type: "button", class: className, title: option.label, "aria-label": option.label, "aria-pressed": "false", value: option.value, on: { click: () => onPick(option.value) } }, content);
}

const RENDERERS = {
  tiles: (option, onPick) => choiceButton(option, onPick, "fui-design-tile", [
    element("span", { class: "fui-design-tile-mark", style: option.mark || "", "aria-hidden": "true" }),
    element("span", { text: option.label }),
  ]),
  swatches: (option, onPick) => choiceButton(option, onPick, "fui-design-dot", [
    element("span", { style: `--swatch-light: ${option.swatch}; --swatch-dark: ${option.swatchDark}`, "aria-hidden": "true" }),
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

export function createPicker({ label, onPick, icons }) {
  const prefix = `fui-design-option-${pickerCount += 1}`;
  let options = [];
  let selected = "";
  let active = 0;
  let typed = "";
  let typedAt = 0;

  const value = element("span", { class: "fui-design-picker-value" });
  const list = element("div", { class: "fui-design-picker-list", role: "listbox", "aria-label": label, tabindex: "-1", hidden: "", on: { keydown: onListKey } });
  const trigger = element("button", { type: "button", class: "fui-design-picker-trigger", "aria-haspopup": "listbox", "aria-expanded": "false", "aria-label": label, on: { click: () => (list.hidden ? open() : close()), keydown: onTriggerKey } }, [value, icon(icons.down)]);

  function activate(position) {
    active = position;
    [...list.children].forEach((node, index) => node.classList.toggle("is-active", index === position));
    list.setAttribute("aria-activedescendant", `${prefix}-${position}`);

    const row = list.children[position];

    if (row.offsetTop < list.scrollTop) list.scrollTop = row.offsetTop;
    else if (row.offsetTop + row.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = row.offsetTop + row.offsetHeight - list.clientHeight;
  }

  function draw() {
    list.replaceChildren(...options.map((option, position) => element("div", {
      id: `${prefix}-${position}`,
      role: "option",
      class: "fui-design-picker-option",
      "aria-selected": String(option.value === selected),
      on: { click: () => pick(option.value), pointermove: () => { if (active !== position) activate(position); } },
    }, [element("span", { text: option.label }), ...(option.value === selected ? [icon(icons.check)] : [])])));
  }

  function place() {
    const box = trigger.getBoundingClientRect();
    const below = innerHeight - box.bottom - LIST_MARGIN - LIST_GAP;
    const above = box.top - LIST_MARGIN - LIST_GAP;

    list.style.minInlineSize = `${box.width}px`;
    list.style.maxBlockSize = "";

    const opensDown = below >= Math.min(list.scrollHeight, LIST_TALLEST) || below >= above;

    list.style.maxBlockSize = `${Math.min(LIST_TALLEST, opensDown ? below : above)}px`;
    list.style.insetBlockStart = `${opensDown ? box.bottom + LIST_GAP : box.top - LIST_GAP - list.offsetHeight}px`;
    list.style.insetInlineStart = `${Math.max(LIST_MARGIN, Math.min(box.left, innerWidth - list.offsetWidth - LIST_MARGIN))}px`;
  }

  function outside(event) {
    if (!list.contains(event.target) && !trigger.contains(event.target)) close();
  }

  function scrolled(event) {
    if (event.target !== list) close();
  }

  function open() {
    draw();
    list.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    place();
    activate(Math.max(0, options.findIndex((option) => option.value === selected)));
    list.focus();
    document.addEventListener("pointerdown", outside, true);
    addEventListener("scroll", scrolled, true);
    addEventListener("resize", close);
  }

  function close() {
    list.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    document.removeEventListener("pointerdown", outside, true);
    removeEventListener("scroll", scrolled, true);
    removeEventListener("resize", close);
  }

  function pick(next) {
    close();
    trigger.focus();
    onPick(next);
  }

  function jumpTo(letter) {
    const now = Date.now();

    typed = now - typedAt > TYPING_PAUSE ? letter : typed + letter;
    typedAt = now;

    const found = options.findIndex((option) => option.label.toLowerCase().startsWith(typed));

    if (found >= 0) activate(found);
  }

  function onTriggerKey(event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      open();
    }
  }

  function onListKey(event) {
    const last = options.length - 1;
    const moves = { ArrowDown: Math.min(last, active + 1), ArrowUp: Math.max(0, active - 1), Home: 0, End: last };

    if (event.key in moves) {
      event.preventDefault();
      activate(moves[event.key]);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      pick(options[active].value);
    } else if (event.key === "Escape" || event.key === "Tab") {
      event.preventDefault();
      close();
      trigger.focus();
    } else if (event.key.length === 1) {
      jumpTo(event.key.toLowerCase());
    }
  }

  return {
    node: element("div", { class: "fui-design-picker" }, [trigger, list]),
    update(nextOptions, nextSelected) {
      options = nextOptions;
      selected = nextSelected;
      value.textContent = (options.find((option) => option.value === selected) || options[0]).label;
    },
  };
}

export function createControl({ label, kind, onPick, icons }) {
  if (kind === "select") {
    const picker = createPicker({ label, onPick, icons });

    return {
      node: element("div", { class: "fui-design-field" }, [element("div", { class: "fui-design-field-head" }, [element("span", { text: label })]), picker.node]),
      update: picker.update,
    };
  }

  const control = createList({ label, kind, onPick });
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
