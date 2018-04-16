import { YOUTUBE_TAG_REGEX } from '../constants';
/**
 * @typedef {Object} metadata
 * @property {string} title The title of the song
 * @property {string} artist The artist of the song
 */

/**
 *
 * @param {string} tag
 * @returns {metadata} Metadata for the lyrics provider
 */
export const sandYoutubeTag = tag => {
  const matches = tag.match(YOUTUBE_TAG_REGEX);
  return {
    artist: matches[3],
    title: matches[1],
  }
}