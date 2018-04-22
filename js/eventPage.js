import { TAB_CHANGED } from './constants';

const callback = (tabid, pageinfo, tab) =>  {
  if(pageinfo.url) {
    setTimeout( () => {
      chrome.tabs.sendMessage(tabid, { type: TAB_CHANGED }, () => {});
    }, 0);
  }
}

chrome.tabs.onUpdated.addListener(
  callback,
);
