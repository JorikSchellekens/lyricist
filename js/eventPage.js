const callback = (tabid, pageinfo, tab) =>  {
  if(pageinfo.url) {
    setTimeout( () => {
      chrome.tabs.sendMessage(tabid, {}, () => {});
    }, 0);
  }
}

chrome.tabs.onUpdated.addListener(
  callback,
);
