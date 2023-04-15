console.log('eventpage.js called');

chrome.extension.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
  if (request.message === 'activate_icon') {
    chrome.tabs.query({ active: true, currentWindow: true }, function () {
      chrome.pageAction.show(sender.tab.id);
    });
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it (like read the url)
  if (changeInfo.url) {
    chrome.tabs.executeScript(tab.id, { file: './custom_js_script.js' });
  }
});
