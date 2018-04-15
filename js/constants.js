export const AZLYRICS_LYRICS_SELECTOR = 'div.col-xs-12.col-lg-8.text-center > div:nth-of-type(5)';
export const LYRIC_LOCATION_SELECTOR = '#items';
export const MUSIC_TAG_SELECTOR = '#collapsible ytd-metadata-row-renderer:last-child #content';
export const SHOW_MORE_SELECTOR = 'paper-button.ytd-expander:nth-child(4)';

export const YOUTUBE_TAG_REGEX = /"([^()]*)(.*)?" by (.*) \(.*•?.*\)/;
export const AZLYRICS_TEMPLATE = (metadata) => `https://www.azlyrics.com/lyrics/${metadata.artist}/${metadata.title}.html`;
export const HTML_MIME_TYPE = 'text/html';

export const COMMENT_REGEX = /<!--.*?-->((.|\n)*)/
