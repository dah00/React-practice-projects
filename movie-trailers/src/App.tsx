import axios from 'axios';
import './App.css';
import { FormEvent, useEffect, useState } from 'react';
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
  const [searchKey, setSearchKey] = useState("");

  const API_URL = "https://api.themoviedb.org/3"
  const API_key = "5f81fc7e65df399d311583079038272d"

  async function getMovies(page?: number, searchKey?: string){
    const type = searchKey ? 'search' : 'discover'

    try{
      const {data: {results}} = await axios.get(`${API_URL}/${type}/movie`,{
        params:{
          api_key: API_key,
          page: page,
          query: searchKey
        }
      });
      console.log(results);
      console.log(`SeachKey: ${searchKey}`);
      setMovies(results);
    }catch(error){
      console.error(`ERROR ${error}`);
    }
  }

  const searchMovies = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getMovies(currentPage, searchKey);
  }

  useEffect(() => {
    getMovies(currentPage, searchKey);
  }, [currentPage])

  const renderMovies = () => {
    if(movies){
      return (
        <div className='grid lg:grid-cols-6 gap-4 justify-center bg-inherit sm:grid-cols-4'>
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
    <div className="App flex flex-col justify-center items-center mx-auto w-90 gap-y-5">
      <header className='flex flex-col gap-y-5'>
        <h1 className='text-4xl font-bold'>Movie browser</h1>
        <form onSubmit={searchMovies}>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} className='text-black'/>
          <button type='submit'>Search</button>
        </form>
      </header>
      {searchKey}
      <main>
        {renderMovies()}
      </main>
    </div>
  );
}

export default App;
