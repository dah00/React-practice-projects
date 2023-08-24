import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';

export type Movie = {
  id: number;
  title: string;
  poster_path: string; // image
  overview: string;   // summary
  release_date: string;
}

function App() {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const API_URL = "https://api.themoviedb.org/3"
  const API_key = "5f81fc7e65df399d311583079038272d"

  async function getMovies(page: number){
    try{
      const {data: {results}} = await axios.get(`${API_URL}/discover/movie/`,{
        params:{
          api_key: API_key,
          page: page
        }
      });
      console.log(results);
      setMovies(results);
    }catch(error){
      console.error(`ERROR ${error}`);
    }
  }

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage])

  const renderMovies = () => {
    if(movies){
      return (
        // className='grid grid-cols-4 gap-4 justify-center bg-inherit'
        <div >
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={{
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                overview: movie.overview,
                release_date: movie.release_date
              }}
            />
          ))}
        </div>
      );
    } 
    else{
      return <div>Loading ...</div>
    }
  }

  return (
    <div className="App flex flex-col justify-center items-center mx-auto w-90">
      <h1 className='text-4xl font-bold'>Movie browser</h1>
      <main>
        {renderMovies()}
      </main>
    </div>
  );
}

export default App;
