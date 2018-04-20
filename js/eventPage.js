const callback = details => {
  console.log("tab changed!");
  console.log(details);
  chrome.tabs.sendMessage(details.tabId, {greeting: "hello"}, function(response) {
    if (response) {
        console.log("Already there");
    }
    else {
        console.log("Not there, inject contentscript");
    }
});
};

chrome.webNavigation.onHistoryStateUpdated.addListener(
  callback,
  {
    url: [
      {hostSuffix: 'youtube.com'},
    ]
  }
);