import React, { useState, useEffect } from 'react'
import './App.css'
import { css } from '@emotion/core'

const answerWrapperCss = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 8px;
`

const answerColumnCss = css`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
`

function App() {
  const [inputTextValue, setInputTextValue] = useState('')
  const [inputText, setInputText] = useState('')
  const [checked, setChecked] = useState(false)
  const [countObject, setCountObject] = useState({})

  useEffect(() => {
    console.log(inputTextValue)
    if (!checked) {
      setInputTextValue(inputTextValue.toUpperCase())
    }
    const obj = {}
    inputTextValue
      .split(' ')
      .join('')
      .split('')
      .forEach((letter) => {
        if (obj.hasOwnProperty(letter)) {
          obj[letter]++
        } else {
          obj[letter] = 1
        }
      })
    setCountObject(obj)

    // if case sensitive checked
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
      <div css={answerWrapperCss}>
        <div css={answerColumnCss}>
          <div>Letter</div>
          {Object.keys(countObject).map((key) => {
            return <div>{key}</div>
          })}
        </div>
        <div css={answerColumnCss}>
          <div>Count</div>
          {Object.values(countObject).map((value) => {
            return <div>{value}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
