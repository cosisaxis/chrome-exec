document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("captureBtn").addEventListener("click", captureScreenshot);
  });
  
  function captureScreenshot() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.captureVisibleTab(activeTab.windowId, { format: "jpeg" }, function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "screenshot.jpg";
        link.click();
      });
    });
  }
  