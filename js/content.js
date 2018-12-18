import {
  getMetadata,
} from './utils/parsers/title';

import {
  fetchLyrics,
} from './utils/providers/AZLyrics';

import {
  TAB_CHANGED,
  VIDEO_ELEMENT_SELECTOR,
  TITLE_SELECTOR,
  MUTATION_OBSERVER_CONFIG,
} from './constants';

import {
  handler
} from './utils/mutation_handlers/cached_handler';

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


const observer = new MutationObserver(handler(() => {
  clearLyricView();
  getLyrics();
}));

observer.observe(document.querySelector(TITLE_SELECTOR), MUTATION_OBSERVER_CONFIG);
