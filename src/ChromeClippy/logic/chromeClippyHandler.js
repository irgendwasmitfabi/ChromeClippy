document.getElementById('newFramelessTab-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      var currentTab = tabs[0];
      chrome.windows.create({
        url: currentTab.url,
        type: "popup",
        width: 800,
        height: 600,
        left: 100,
        top: 100
      });
    });
  });