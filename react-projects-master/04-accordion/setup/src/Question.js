import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  const toggle = () => {
    setDisplayInfo(() => !displayInfo)
  }

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={toggle}>
        {displayInfo ? <AiOutlineMinus/> : <AiOutlinePlus/> }
      </button> 
    </header>
    {displayInfo && <p>{info}</p>}
  </article>;
};

export default Question;
