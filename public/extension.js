/*global chrome*/

chrome.runtime.onMessage.addListener(function(field) {
  const elem = document.querySelector(field)

  if (elem) {
    if (elem.innerHTML === '5') {
      chrome.runtime.sendMessage('play')
    }
  } else {
    console.log('Element not found!')
  }
})
