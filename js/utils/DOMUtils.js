export const createDiv = (innerText = '') => {
  const element = document.createElement('div');
  element.innerHTML = innerText;
  return element;
}

export const injectDOMElement = (selector, element) => {
  const root = document.querySelector(selector);
  root.insertBefore(element, root.firstChild);
}