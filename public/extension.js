/*global chrome*/

chrome.runtime.onMessage.addListener(function(field) {
  const elem = document.querySelector(field)

  if (elem) {
    console.log(elem.innerHTML)
  } else {
    console.log('Element not found!')
  }
})
