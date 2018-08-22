import awaitElement from '../awaitElement';

const TITLE_SELECTOR = '#container > h1';

const TITLE_SPLIT_REGEX = /(.*)(-|:)(.*)/
const BRACKET_REGEX = /\(.*\)/
const FEAT_REGEX = /(\sfeat|\sft.).*/i
const OFFICIAL_REGEX = /(\sofficial video).*/i
const getTitle = async () =>
  await awaitElement(TITLE_SELECTOR);

/**
 *
 * @param {string} title
 * @returns {metadata} Metadata for the lyrics provider
 */
const sandTitle = title => {
  const matches = title
    .match(TITLE_SPLIT_REGEX)
    .map(s => s.trim()
      .replace(BRACKET_REGEX, "")
      .replace(FEAT_REGEX, "")
      .replace(OFFICIAL_REGEX, "")
    );
  return {
    artist: matches[1],
    title: matches[3],
  }
}


/**
 * @returns {metadata} Metadata for the lyrics provider
 */
export const getMetadata = () => {
  return getTitle().then(title => sandTitle(title.innerText));
}

