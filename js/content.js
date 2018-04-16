import {
  AZLYRICS_LYRICS_SELECTOR,
  SHOW_MORE_SELECTOR,
  SHOW_LESS_SELECTOR,
  MUSIC_TAG_SELECTOR,
  LYRIC_LOCATION_SELECTOR,
  HTML_MIME_TYPE,
} from './constants';

import {
  sandYoutubeTag,
  sandAZParams,
} from './utils/sandSongTitle';

import {
  fetchLyrics,
} from './utils/providers/AZLyrics';

import awaitElement from './utils/awaitElement';

import { createLyricView } from './views/lyricsView';

const showMoreButton = async () => 
  await awaitElement(SHOW_MORE_SELECTOR);

const a = showMoreButton();
a.then(more => {
  more.click();
  awaitElement(MUSIC_TAG_SELECTOR)
    .then(tag => {
      const metadata = sandYoutubeTag(tag.innerText);
      document.querySelector(SHOW_LESS_SELECTOR).click();
      fetchLyrics(metadata)
        .then(lyrics => {
          createLyricView(lyrics);
        });
  })
});
