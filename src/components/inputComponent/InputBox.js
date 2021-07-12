import React, { useState } from 'react'
import './InputBox.css'

function InputBox() {

  const [inputValue, setInputValue] = useState('')
  return (
    <div className="input_container">
      <div className="input_wrapper">
        <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
        <button>Check</button>
      </div>
      <div className="input_card">
        <h3>Make: {inputValue}</h3>
        <h3>Make: {inputValue}</h3>
        <h3>Make: {inputValue}</h3>
        <h3>Make: {inputValue}</h3>
      </div>
      
    
      
    </div>
  )
}

export default InputBox
