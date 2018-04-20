import {
  getMetadata,
} from './utils/parsers/tag';

import {
  fetchLyrics,
} from './utils/providers/AZLyrics';

import { createLyricView } from './views/lyricsView';

const yeah = (request, sender, response) => {
  console.log("message!");
};
// Listen for tab changes from eventPage

const getLyrics = () => {
  getMetadata().then(metadata => {
    fetchLyrics(metadata)
      .then(lyrics => {
        createLyricView(lyrics);
      })
    });
};

chrome.runtime.onMessage.addListener(getLyrics);

getLyrics();
