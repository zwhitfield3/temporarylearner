console.log('background is running')

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked (tab) {
  console.log('buttonClicked')
  let msg = {
    txt: 'hello'
  }
  chrome.tabs.sendMessage(tab.id, msg)
}
