export const createDiv = (innerText = '') => document.createElement('div').appendChild(document.createTextNode(innerText));

export const injectDOMElement = (selector, element) => {
  const root = document.querySelector(selector);
  root.insertBefore(element, root.firstChild);
}