import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import './App.css'
import { css } from '@emotion/core'
import Axios from 'axios'

const pageTitleCss = css`
  font-size: 2em;
  margin-top: 8px;
  margin-bottom: 8px;
`

const formCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const textInputCss = css`
  width: 34%;
  font-size: 1.3em;
  padding: 8px;
  border-radius: 15px;
  outline: none;
`

const checkboxWrapperCss = css`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`

const buttonCss = css`
  font-size: 1.5em;
  background-color: grey;
  color: white;
  border-radius: 15px;
  outline: none;
`

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

const titleCss = css`
  border-bottom: 2px solid black;
  font-size: 1.3em;
`

const returnedObjCss = css`
  font-size: 1.3em;
`

function App() {
  const [inputTextValue, setInputTextValue] = useState('')
  const [inputText, setInputText] = useState('')
  const [checked, setChecked] = useState(false)
  const [countObject, setCountObject] = useState({})
  // const [arrayPayload, setArrayPayload] = useState([])

  useEffect(() => {
    console.log(inputTextValue)
    if (!checked) {
      setInputTextValue(inputTextValue.toUpperCase())
    }

    Axios
      // axios
      // .post('http://localhost:8081', { payload: inputTextValue.split(' ').join('').split('') })
      .post('http://localhost:8081', { payload: 'hello' })
      .then((data) => console.log(data))

    // const obj = {}
    // inputTextValue
    //   .split(' ')
    //   .join('')
    //   .split('')
    //   .forEach((letter) => {
    //     if (obj.hasOwnProperty(letter)) {
    //       obj[letter]++
    //     } else {
    //       obj[letter] = 1
    //     }
    //   })
    // setCountObject(obj)

    // if case sensitive checked
    setInputText('')
  }, [inputTextValue])

  return (
    <div className="App">
      <div css={pageTitleCss}>Enter Word</div>
      <form css={formCss}>
        <input css={textInputCss} type="text" onChange={(e) => setInputText(e.currentTarget.value)} value={inputText} />
        <div css={checkboxWrapperCss}>
          <div>Make Case Sensitive?</div>
          <input type="checkbox" onChange={() => setChecked(!checked)} id="caseSens" name="caseSens" value="CaseSens" />
        </div>
        <br />
      </form>

      <button
        css={buttonCss}
        type="button"
        onClick={() => {
          setInputTextValue(inputText)
        }}
      >
        Submit
      </button>
      <div css={answerWrapperCss}>
        <div css={answerColumnCss}>
          <div css={titleCss}>Letter</div>
          {Object.keys(countObject).map((key) => {
            return <div css={returnedObjCss}>{key}</div>
          })}
        </div>
        <div css={answerColumnCss}>
          <div css={titleCss}>Count</div>
          {Object.values(countObject).map((value) => {
            return <div css={returnedObjCss}>{value}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
