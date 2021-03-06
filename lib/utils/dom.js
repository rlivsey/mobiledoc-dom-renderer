export function createElement(tagName) {
  return document.createElement(tagName);
}

export function appendChild(target, child) {
  target.appendChild(child);
}

export function removeChild(target, child) {
  target.removeChild(child);
}

function addHTMLSpaces(text) {
  let nbsp = '\u00A0';
  return text.replace(/  /g, ' ' + nbsp);
}

export function createTextNode(text) {
  return document.createTextNode(addHTMLSpaces(text));
}

export function setAttribute(node, propName, value) {
  node.setAttribute(propName, value);
}

export function createDocumentFragment() {
  return document.createDocumentFragment();
}

export function normalizeTagName(tagName) {
  return tagName.toLowerCase();
}
