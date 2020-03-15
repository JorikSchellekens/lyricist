import axios from 'axios';

/**
 * @typedef {Object} metadata
 * @property {string} title The title of the song
 * @property {string} artist The artist of the song
 */

const COMMENT_REGEX = /<!--.*?-->((.|\n)*)/;
const URL = metadata => `https://CelebratedRadiantCareware--lordraj.repl.co/lyrics?title=${metadata.title}&artist=${metadata.artist}`;


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
  }).then(result => result.data.match(COMMENT_REGEX)[1]);
