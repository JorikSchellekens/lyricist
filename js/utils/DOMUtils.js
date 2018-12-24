const HTML_MIME_TYPE = 'text/html';

export const createDiv = (innerText = '') => {
  const element = document.createElement('div');
  element.innerHTML = innerText;
  return element;
};

export const injectDOMElement = (selector, element) => {
  const root = document.querySelector(selector);
  root.insertBefore(element, root.firstChild);
};

export const removeDOMElement = element => {
  if (element) element.parentNode.removeChild(element);
};

export const parseDOM = result => {
  const DOM = new DOMParser();
  return DOM.parseFromString(result.data, HTML_MIME_TYPE);
};
