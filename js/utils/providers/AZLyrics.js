import axios from 'axios';
import { parseDOM } from '../DOMUtils';

/**
 * @typedef {Object} metadata
 * @property {string} title The title of the song
 * @property {string} artist The artist of the song
 */

const COMMENT_REGEX = /<!--.*?-->((.|\n)*)/;
const LYRIC_SELECTOR = 'div.col-xs-12.col-lg-8.text-center > div:nth-of-type(5)';
const URL = metadata => `https://www.azlyrics.com/lyrics/${metadata.artist}/${metadata.title}.html`;

/**
 * @typedef {Object} metadata
 * @property {string} title The title of the song
 * @property {string} artist The artist of the song
 */
const sandParams = metadata => {
  const { artist, title } = metadata;
  const removeThe = s => s.indexOf('the') === 0 ? s.substring(3) : s;
  const applySand = s => s.toLowerCase().split('')
    .filter(s => (s >= 'a' && s <= 'z') || (s >= '0' && s <= '9')).join('');
  return {
    artist: removeThe(applySand(artist)),
    title: applySand(title),
  };
};

/**
 *
 * @param {metadata} metadata
 * @returns {string} Lyrics for the song
 */
export const fetchLyrics = metadata =>
  axios({
    method: 'GET',
    url: URL(sandParams(metadata)),
  })
    .then(result =>
      parseDOM(result)
        .querySelector(LYRIC_SELECTOR)
        .innerHTML
        .match(COMMENT_REGEX)[1]);
