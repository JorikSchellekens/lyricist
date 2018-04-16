function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log("Updated tab: " + tabId);
  console.log("Changed attributes: ");
  console.log(changeInfo);
  console.log("New tab Info: ");
  console.log(tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated);