import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const onFetchHandler = async () => {
    setIsLoading(true);
    setError(null);
    // fetch('https://swapi.py4e.com/api/films')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log('results: ', data.results);
    //     const moviesSw = data.results.map((movie) => ({
    //       id: movie.episode_id,
    //       title: movie.title,
    //       openingText: movie.opening_crawl,
    //       releaseDate: movie.release_date,
    //     }));

    //     setMovies(moviesSw);
    //   })
    //   .catch((error) => console.log('error: ', error));

    try {
      const response = await fetch('https://swapi.py4e.com/api/film');
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();

      console.log('results: ', data.results);
      const moviesSw = data.results.map((movie) => ({
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      }));

      setMovies(moviesSw);
    } catch (error) {
      console.log('error: ', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={onFetchHandler}>Fetch Movies</button>
      </section>
      <section>
        {!error &&
          (isLoading ? (
            <p>Loading...</p>
          ) : movies.length > 0 ? (
            <MoviesList movies={movies} />
          ) : (
            <p>No movies yet</p>
          ))}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
