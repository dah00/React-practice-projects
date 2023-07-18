import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = (index+1) % people.length;
      return newIndex;
    });
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = (index === 0) ? people.length-1 : (index-1) % people.length;
      return newIndex;
    });
  }

  const randomPerson = () => {
    setIndex(() => {
      return Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    })
  }

  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
  </article>;
};

export default Review;
