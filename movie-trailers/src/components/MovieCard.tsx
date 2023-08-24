import React from 'react'
import { Movie } from '../App'

type MovieCardProps = {
    movie: Movie;
}

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

function MovieCard({movie}: MovieCardProps ) {

  const {title, poster_path, overview, release_date } = movie;

  return (
    <div className='flex flex-col'>
        <img src={`${IMAGE_PATH}${poster_path}`} alt={title} />
        <figcaption>
            <h3>{title}</h3>
            <h4>released on {release_date}</h4>
            <p>{overview}</p>
        </figcaption>
    </div>
  )
}

export default MovieCard