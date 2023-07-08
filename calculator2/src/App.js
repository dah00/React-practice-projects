import './App.css';
import Input from './components/Input.jsx'
import React, { useState } from 'react';

function App() {

  const [value, setValue] = useState('');

  const addValueOnClick = (v) => {
    setValue(value.concat(v));
  }

  const clearInput = () => {
    setValue('');
  }

  const deleteCharacter = () => {
    setValue(value.slice(0, -1));
  }

  const calculate = () => {
    try{
      setValue(eval(value).toString());
    }
    catch(error){
      setValue('Error');
    }
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <Input value={value}/>
        <div className="buttons-container">
          <div className='' ></div>
          <div className='' onClick={clearInput}>CE</div>
          <div className='' onClick={deleteCharacter}>DEL</div>
          <div className='' onClick={() => addValueOnClick('/')}>÷</div>
          <div className='' onClick={() => addValueOnClick('7')}>7</div>
          <div className='' onClick={() => addValueOnClick('8')}>8</div>
          <div className='' onClick={() => addValueOnClick('9')}>9</div>
          <div className='' onClick={() => addValueOnClick('*')}>x</div>
          <div className='' onClick={() => addValueOnClick('4')}>4</div>
          <div className='' onClick={() => addValueOnClick('5')}>5</div>
          <div className='' onClick={() => addValueOnClick('6')}>6</div>
          <div className='' onClick={() => addValueOnClick('-')}>-</div>
          <div className='' onClick={() => addValueOnClick('1')}>1</div>
          <div className='' onClick={() => addValueOnClick('2')}>2</div>
          <div className='' onClick={() => addValueOnClick('3')}>3</div>
          <div className='' onClick={() => addValueOnClick('+')}>+</div>
          <div className='' onClick={() => addValueOnClick('.')}>.</div>
          <div className='' onClick={() => addValueOnClick('0')}>0</div>
          <div className='equal-2span' onClick={calculate}>=</div>
        </div>
      </div>        
    </div>
  );
}

export default App;
