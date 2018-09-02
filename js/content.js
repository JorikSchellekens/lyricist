import {
  getMetadata,
} from './utils/parsers/title';

import {
  fetchLyrics,
} from './utils/providers/AZLyrics';

import {
  TAB_CHANGED,
  VIDEO_ELEMENT_SELECTOR,
} from './constants';

import { createLyricView, clearLyricView } from './views/lyricsView';

const getLyrics = () => {
  getMetadata().then(metadata => {
    fetchLyrics(metadata)
      .then(lyrics => {
        const playerHeight =
          document.querySelector(VIDEO_ELEMENT_SELECTOR).style.height;
        createLyricView(lyrics, playerHeight);
      })
    });
};

const messageHandler = message => {
  switch(message.type) {
    case TAB_CHANGED:
      clearLyricView();
      getLyrics();
    default:
      return;
  }
}

// Listen for tab changes from eventPage
chrome.runtime.onMessage.addListener(messageHandler);

getLyrics();
