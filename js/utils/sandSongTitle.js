import { YOUTUBE_TAG_REGEX } from '../constants';

export const sandYoutubeTag = tag => {
  const matches = tag.match(YOUTUBE_TAG_REGEX);
  return {
    artist: matches[3],
    title: matches[1],
  }
}