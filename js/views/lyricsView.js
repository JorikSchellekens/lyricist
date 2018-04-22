import { createDiv, injectDOMElement } from '../utils/DOMUtils';
import {
  COMMENT_REGEX,
  LYRIC_LOCATION_SELECTOR,
  LYRICS_VIEW_CLASS_LIST,
  LYRICS_VIEW_CSS,
} from '../constants';

export const createLyricView = lyrics => {
  const lyricsDiv = createDiv(lyrics);
  addCSS(LYRICS_VIEW_CSS, lyricsDiv);
  addClass(LYRICS_VIEW_CLASS_LIST, lyricsDiv);
  injectDOMElement(LYRIC_LOCATION_SELECTOR, lyricsDiv);
}

const addClass = (classList, element) => {
  element.classList.add(...classList);
}

const addCSS = (styles, element) => {
  Object.entries(styles).forEach(pair => element.style[pair[0]] = [pair[1]]);
}
