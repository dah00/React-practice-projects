import React, {useState} from 'react'
import Button from './components/Button'
import './App.css';
import Input from './components/Input'
import * as math from 'mathjs';

function App() {

  let [text, setText] = useState('');
  let [result, setResult] = useState('');

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  }

  const resetInput = () => {
    setText("");
    setResult("");
  }

  const calculateResult = () => {
    const input = text.join("") //remove commas

    setResult(math.evaluate(input));
  }

  return (
    <div className="App">
      <div className='calc-wrapper'>
        <Input text={text} result={result} />
        <Button symbol="Clear" color="red" handleClick={resetInput}/>
        <div className='row'>
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="*" color="#f2a33c" handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button symbol="4" handleClick={addToText}/> 
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="-" color="#f2a33c" handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color="#f2a33c" handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." className="span1" handleClick={addToText}/>
          <Button symbol="=" color="#f2a33c" className="span1" handleClick={calculateResult}/>
        </div>
      </div>
    </div>
  );
}

export default App;
