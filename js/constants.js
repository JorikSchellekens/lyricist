export const SHOW_MORE_SELECTOR = 'paper-button.ytd-expander:nth-child(4)';
export const MUSIC_TAG_SELECTOR = '#collapsible ytd-metadata-row-renderer:last-child #content';
export const LYRIC_LOCATION_SELECTOR = '#items';

export const YOUTUBE_TAG_REGEX = /"(.*)" by (.*) \( • \)/;
export const AZLYRICS_TEMPLATE = (metadata) => `https://www.azlyrics.com/lyrics/${metadata.artist}/${metadata.title}.html`;