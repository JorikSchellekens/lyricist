import {
  getMetadata,
} from './utils/parsers/tag';

import {
  fetchLyrics,
} from './utils/providers/AZLyrics';

import { createLyricView } from './views/lyricsView';

getMetadata().then(metadata => {
  fetchLyrics(metadata)
    .then(lyrics => {
      createLyricView(lyrics);
    })
  });
