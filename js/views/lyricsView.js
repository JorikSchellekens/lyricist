import {
  createDiv,
  injectDOMElement,
  removeDOMElement,
} from '../utils/DOMUtils';
import {
  COMMENT_REGEX,
  LYRIC_LOCATION_SELECTOR,
  LYRICS_VIEW_CLASS_LIST,
  LYRICS_VIEW_CSS,
  LYRICS_VIEW_ID,
} from '../constants';

export const createLyricView = (lyrics, playerHeight) => {
  const lyricsDiv = createDiv(lyrics);
  addCSS(LYRICS_VIEW_CSS(playerHeight), lyricsDiv);
  addClass(LYRICS_VIEW_CLASS_LIST, lyricsDiv);
  addId(LYRICS_VIEW_ID, lyricsDiv);
  injectDOMElement(LYRIC_LOCATION_SELECTOR, lyricsDiv);
};

export const clearLyricView = () => {
  removeDOMElement(document.getElementById(LYRICS_VIEW_ID));
};

const addClass = (classList, element) => {
  element.classList.add(...classList);
};

const addId = (id, element) => {
  element.id = id;
};

const addCSS = (styles, element) => {
  Object.entries(styles).forEach(pair => element.style[pair[0]] = [pair[1]]);
};
