import React from 'react'
import './Button.css'

function Button({symbol, color, handleClick}) {

  const buttonStyle ={
    backgroundColor: color,
    flex: symbol === '0' ? '0 0 50%' : '0 0 25%'
  }

  return (
    <div onClick={() => handleClick(symbol)} className='button-wrapper' style={buttonStyle}>{symbol}</div>
  )
}

export default Button 