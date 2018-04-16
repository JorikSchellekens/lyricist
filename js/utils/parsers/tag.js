import awaitElement from '../awaitElement';

const SHOW_MORE_SELECTOR = 'paper-button.ytd-expander:nth-child(4)';
const SHOW_LESS_SELECTOR = 'paper-button.ytd-expander:nth-child(3)';
const TAG_SELECTOR = '#collapsible ytd-metadata-row-renderer:last-child #content';
const YOUTUBE_TAG_REGEX = /"([^()]*)(.*)?" by (.*) \(.*•?.*\)/;

const showMoreButton = async () => 
  await awaitElement(SHOW_MORE_SELECTOR);

/**
 *
 * @param {string} tag
 * @returns {metadata} Metadata for the lyrics provider
 */
const sandTag = tag => {
  const matches = tag.match(YOUTUBE_TAG_REGEX);
  return {
    artist: matches[3],
    title: matches[1],
  }
}

/**
 * @returns {metadata} Metadata for the lyrics provider
 */
export const getMetadata = () => {
  const a = showMoreButton();
  return a.then(more => {
    more.click();
    return awaitElement(TAG_SELECTOR).then(tag => {
        const metadata = sandTag(tag.innerText);
        document.querySelector(SHOW_LESS_SELECTOR).click();
        return metadata;
    })
  });
}
