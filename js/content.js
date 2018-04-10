import {
  AZLYRICS_LYRICS_SELECTOR,
  SHOW_MORE_SELECTOR,
  MUSIC_TAG_SELECTOR,
  LYRIC_LOCATION_SELECTOR,
  HTML_MIME_TYPE,
} from './constants';

import {
  sandYoutubeTag,
  sandAZParams,
} from './utils/sandSongTitle';

import {
  fetchAZLyrics,
} from './utils/fetchLyrics';

import awaitElement from './utils/awaitElement';

import { createLyricView } from './views/lyricsView';

const showMoreButton = async () => 
  await awaitElement(SHOW_MORE_SELECTOR);

const a = showMoreButton();
a.then(more => {
  more.click();
  awaitElement(MUSIC_TAG_SELECTOR)
    .then(tag => {
      fetchAZLyrics(sandYoutubeTag(tag.innerText))
      .then(result => {
        const DOM = new DOMParser();
        const $ = DOM.parseFromString(result.data, HTML_MIME_TYPE);
        const lyrics = $.querySelector(AZLYRICS_LYRICS_SELECTOR).innerHTML;
        createLyricView(lyrics);
      })
  })
});