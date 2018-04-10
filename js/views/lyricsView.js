import { createDiv, injectDOMElement } from '../utils/DOMUtils';
import {
  COMMENT_REGEX,
  LYRIC_LOCATION_SELECTOR,
} from '../constants';

export const createLyricView = lyrics => {
  injectDOMElement(LYRIC_LOCATION_SELECTOR, createDiv(lyrics.match(COMMENT_REGEX)[1]));
}