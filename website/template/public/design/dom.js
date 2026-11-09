export function element(tag, attributes = {}, children = []) {
  const node = document.createElement(tag);

  Object.entries(attributes).forEach(([name, value]) => {
    if (name === "text") node.textContent = value;
    else if (name === "on") Object.entries(value).forEach(([event, handler]) => node.addEventListener(event, handler));
    else if (name === "value") node.value = value;
    else node.setAttribute(name, value);
  });
  node.append(...children);

  return node;
}

export async function copied(button, text) {
  const before = button.textContent;

  await navigator.clipboard.writeText(text);
  button.textContent = "Copied";
  setTimeout(() => { button.textContent = before; }, 1200);
}
