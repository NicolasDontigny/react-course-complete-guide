import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFetchHandler = useCallback(async () => {
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
      // const response = await fetch('https://swapi.py4e.com/api/films');
      const response = await fetch(
        'https://react-course-http-62c89-default-rtdb.europe-west1.firebasedatabase.app/movies.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // console.log('results: ', data.results);
      // const moviesSw = data.results.map((movie) => ({
      //   id: movie.episode_id,
      //   title: movie.title,
      //   openingText: movie.opening_crawl,
      //   releaseDate: movie.release_date,
      // }));

      setMovies(loadedMovies);
    } catch (error) {
      console.log('error: ', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    onFetchHandler();
  }, [onFetchHandler]);

  const addMovieHandler = async (movie) => {
    console.log(movie);
    const response = await fetch(
      'https://react-course-http-62c89-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log('Data: ', data);
  };

  let content = <p>Found no movies.</p>;

  if (error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else if (movies.length === 0) {
    content = <p>No movies available</p>;
  } else {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={onFetchHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
