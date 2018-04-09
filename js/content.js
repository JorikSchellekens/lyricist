import {
    SHOW_MORE_SELECTOR,
    MUSIC_TAG_SELECTOR,
    LYRIC_LOCATION_SELECTOR
} from './constants';

console.log("Dev me");

import awaitElement from './utils/awaitElement';

const showMoreButton = async () => 
    await awaitElement(SHOW_MORE_SELECTOR);

const a = showMoreButton();
console.log("hello");
console.log(a);
console.log("banter");
a.click();
