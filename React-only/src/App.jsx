import React, { useState, useEffect } from 'react'
import './App.css'
import { css } from '@emotion/core'

function App() {
  const [inputTextValue, setInputTextValue] = useState('')
  const [inputText, setInputText] = useState('')
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    console.log(inputTextValue)
    if (!checked) {
      setInputTextValue(inputTextValue.toUpperCase())
    }
    // if case sensitive checked
    // inputTextValue.split(' ').join('').split('')
    setInputText('')
  }, [inputTextValue])

  return (
    <div className="App">
      <div>Enter Word</div>
      <form>
        <input type="text" onChange={(e) => setInputText(e.currentTarget.value)} value={inputText} />
        <input type="checkbox" onChange={() => setChecked(!checked)} id="caseSens" name="caseSens" value="CaseSens" />
        <label htmlFor="caseSens"> Make Case Sensitive?</label>
        <br />
      </form>

      <button
        type="button"
        onClick={() => {
          setInputTextValue(inputText)
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default App
