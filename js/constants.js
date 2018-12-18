export const LYRIC_LOCATION_SELECTOR = '#related';
export const LYRICS_VIEW_CLASS_LIST = ['lyrics'];

export const LYRICS_VIEW_CSS = (height = '500px') => ({
  'color': 'var(--ytd-video-primary-info-renderer-title-color, var(--yt-primary-text-color))',
  'font-family': 'var(--ytd-video-primary-info-renderer-title-font-family, inherit)',
  'font-size': '1.4rem',
  'overflow': 'auto',
  'padding-left': '1rem',
  'padding-right': '1rem',
  'margin-bottom': '2rem',
  'height': height,
});
export const LYRICS_VIEW_ID = 'lyrics';

export const TAB_CHANGED = 'TAB_CHANGED';

export const VIDEO_ELEMENT_SELECTOR = 'video';

export const MUTATION_OBSERVER_CONFIG = { childList: true };

export const TITLE_SELECTOR = 'TITLE';
