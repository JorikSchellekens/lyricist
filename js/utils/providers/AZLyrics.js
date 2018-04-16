import axios from 'axios';

import {
  parseDOM,
} from '../DOMUtils';

const COMMENT_REGEX = /<!--.*?-->((.|\n)*)/
const LYRIC_SELECTOR = 'div.col-xs-12.col-lg-8.text-center > div:nth-of-type(5)';
const URL = metadata => `https://www.azlyrics.com/lyrics/${metadata.artist}/${metadata.title}.html`;

const sandParams = metadata => {
  const { artist, title } = metadata;
  const applySand = s => s.toLowerCase().split('').filter(c => 'a' <= c && c <= 'z').join('');
  return {
    artist: applySand(artist),
    title: applySand(title),
  }
}

/**
 * @param {string} metadata.artist
 * @param {string} metadata.title
 */
export const fetchLyrics = metadata => {
  const options = {
    method: 'GET',
    url: URL(sandParams(metadata)),
  };
  return axios(options)
    .then(result => {
      const lyrics = parseDOM(result)
        .querySelector(LYRIC_SELECTOR).innerHTML;
      return lyrics.match(COMMENT_REGEX)[1];
    });
}