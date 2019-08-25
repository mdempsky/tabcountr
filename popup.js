chrome.tabs.query({currentWindow: true}, (result) => {
  CurrentWindowCount.innerText = result.length;
});
