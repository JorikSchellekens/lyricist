import {
  getMetadata,
} from './utils/parsers/tag';

import {
  fetchLyrics,
} from './utils/providers/AZLyrics';

import { createLyricView } from './views/lyricsView';

const getLyrics = () => {
  getMetadata().then(metadata => {
    fetchLyrics(metadata)
      .then(lyrics => {
        createLyricView(lyrics);
      })
    });
};

// Listen for tab changes from eventPage
chrome.runtime.onMessage.addListener(getLyrics);

getLyrics();
