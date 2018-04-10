import { createDiv, injectDOMElement } from '../utils/DOMUtils';
import { LYRIC_LOCATION_SELECTOR } from '../constants';

export const createLyricView = lyrics => {
  injectDOMElement(LYRIC_LOCATION_SELECTOR, createDiv(lyrics));
}