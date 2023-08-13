import React from 'react'

function Card() {
  return (
    <ul className='flex flex-col justify-center items-center'>
        <li className='m-6 p-5 border-2 rounded-lg w-3/5 bg-slate-500 text-white'>
            <h2>Title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel similique architecto</p>
            <p>John Levany</p>
        </li>
        <li className='m-6 p-5 border-2 rounded-lg w-3/5 bg-slate-500 text-white'>
            <h2>Title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel similique architecto</p>
            <p>John Levany</p>
        </li>
        <li className='m-6 p-5 border-2 rounded-lg w-3/5 bg-slate-500 text-white'>
            <h2>Title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel similique architecto</p>
            <p>John Levany</p>
        </li>
    </ul>
  )
}

export default Card