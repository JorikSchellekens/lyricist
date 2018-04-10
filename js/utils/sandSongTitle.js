import { YOUTUBE_TAG_REGEX } from '../constants';

export const sandYoutubeTag = tag => {
  const matches = tag.match(YOUTUBE_TAG_REGEX);
  return {
    artist: matches[1],
    title: matches[2],
  }
}

export const sandAZParams = (metadata) => {
  const { artist, title } = metadata;
  console.log(artist, title);
  const applySand = s => s.toLowerCase().split('').filter(c => 'a' <= c && c <= 'z').join('');
  return {
    artist: applySand(artist),
    title: applySand(title),
  }
}