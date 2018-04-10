import {
  SHOW_MORE_SELECTOR,
  MUSIC_TAG_SELECTOR,
  LYRIC_LOCATION_SELECTOR,
} from './constants';

import {
  sandYoutubeTag,
  sandAZParams,
} from './utils/sandSongTitle';

import {
  fetchAZLyrics,
} from './utils/fetchLyrics';

import awaitElement from './utils/awaitElement';

const showMoreButton = async () => 
  await awaitElement(SHOW_MORE_SELECTOR);

const a = showMoreButton();
a.then(more => {
  more.click();
  awaitElement(MUSIC_TAG_SELECTOR)
    .then(tag => {
      fetchAZLyrics(sandYoutubeTag(tag))
      .then()
  })
});