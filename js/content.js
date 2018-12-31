import {
  getMetadata,
} from './utils/parsers/title';

import {
  fetchLyrics,
} from './utils/providers/AZLyrics';

import {
  MUTATION_OBSERVER_CONFIG,
  TITLE_SELECTOR,
  VIDEO_ELEMENT_SELECTOR,
} from './constants';

import {
  handler
} from './utils/mutation_handlers/cached_handler';

import { createLyricView, clearLyricView } from './views/lyricsView';

const observer = new MutationObserver(handler(() => {
  clearLyricView();
  fetchLyrics(getMetadata())
    .then(lyrics => {
      createLyricView(lyrics,
        document.querySelector(VIDEO_ELEMENT_SELECTOR).style.height);
    });
}));

observer.observe(document.querySelector(TITLE_SELECTOR), MUTATION_OBSERVER_CONFIG);
