/*global chrome*/

import React, { useState } from 'react'
import './App.css'

function App() {
  const [field, setField] = useState('#digit2')

  const start = () => {
    setInterval(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const tab = tabs[0]
        chrome.tabs.executeScript(tab.id, { file: 'extension.js' }, function() {
          chrome.tabs.sendMessage(tab.id, field)
        })
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url })
      })
    }, 3000)
  }

  return (
    <div className="App">
      <input
        type="text"
        value={field}
        onChange={e => setField(e.target.value)}
      />
      <button onClick={start}>Start</button>
    </div>
  )
}

export default App
