var targetPage = "https://*/*";

function AddSecureCSP(e) {
  e.requestHeaders.forEach(function(header){
      header.name = "Content-Security-Policy";
      header.value = "block-all-mixed-content"
  });
  return {requestHeaders: e.requestHeaders};
}

chrome.webRequest.onBeforeSendHeaders.addListener(
  AddSecureCSP,
  {urls: [targetPage]},
  ["blocking", "requestHeaders"]
);