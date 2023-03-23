import { useRef, useState } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (event) => {
    event.preventDefault();
    setResult( (result) => result + Number(inputRef.current.value));
  }

  const minus = (event) => {
    event.preventDefault();
    setResult( (result) => result - Number(inputRef.current.value));
  }

  const times = (event) => {
    event.preventDefault();
    setResult( (result) => result * Number(inputRef.current.value));
  }

  const divide = (event) => {
    event.preventDefault();
    setResult( (result) => result / Number(inputRef.current.value));
  }

  const resetInput = (event) => {
    event.preventDefault();
    inputRef.current.value = null;
  }

  const resetResult = (event) => {
    event.preventDefault();
    resultRef.current.value = null;
    setResult( prev => prev = 0);
  }


  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <p>Instructions: Type a number on the input field. The calculator works by
        performing the desired operation using the current text and the inputted text
        (e.g. current + input, current - input, current * input, current / input)
      </p>
      <form>
        <h2 ref={resultRef}>Current: {result}</h2>
        <input
          type="number"
          pattern="[0-9]"
          ref={inputRef}
          placeholder="Type a number"
        />
        <br />
        <br />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={times}>*</button>
        <button onClick={divide}>/</button>
        <br />
        <br />
        <button className="reset-btn" onClick={resetInput}>Reset Input</button>
        <button className="reset-btn" onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  )
}

export default App
