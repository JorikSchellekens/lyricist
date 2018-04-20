const callback = details => 
  chrome.tabs.sendMessage(details.tabId, {}, () => {});

chrome.webNavigation.onHistoryStateUpdated.addListener(
  callback,
  {
    url: [
      {hostSuffix: 'youtube.com'},
    ]
  }
);