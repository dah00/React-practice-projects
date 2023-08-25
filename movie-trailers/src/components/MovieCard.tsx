import React, { useState } from 'react'
import { Movie } from '../App'
import { FaStar } from 'react-icons/fa'

type MovieCardProps = {
    movie: Movie;
}

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

function MovieCard({movie}: MovieCardProps ) {
  
  const [readMore, setReadMore] = useState(false);
  const {title, poster_path, overview, release_date } = movie;

  const displayOverview = () => {
    if(readMore){
      return <div>
        {overview} <button onClick={() => setReadMore(!readMore)} className='text-sky-400 underline'>Show less</button>
      </div>
    }
    else{
      return <div>
        {overview.substring(0, 180)} <button onClick={() => setReadMore(!readMore)} className='text-sky-400 underline'>Read more</button>
      </div>
    }
  }

  return (
    <div className='flex flex-col gap-y-4'>
        <img src={`${IMAGE_PATH}${poster_path}`} alt={title} />
        <figcaption className='flex flex-col gap-y-2'>
            <h3 className='text-center font-semibold text-xl'>{title}</h3>
            <div className='flex items-center gap-2'><span className='underline'>Rate</span><FaStar size={20} color='gold'/></div>
            <h4><span className='underline'>Released on:</span> {release_date}</h4>
            <div><span className='underline'>Summary</span>{overview.length < 180 ? <p>{overview}</p> : displayOverview()}</div>
        </figcaption>
    </div>
  )
}

export default MovieCard