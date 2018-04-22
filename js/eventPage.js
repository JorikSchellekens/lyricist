const callback = (tabid, pageinfo, tab) =>  {
  if(pageinfo.url) {
    chrome.tabs.sendMessage(tabid, {}, () => {});
  }
}

chrome.tabs.onUpdated.addListener(
  callback,
);
