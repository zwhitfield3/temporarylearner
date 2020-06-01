console.log("chrome extension we are a go!");

chrome.runtime.onMessage.addListener(gotMessage);

//message is the message from background.js
function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
}
