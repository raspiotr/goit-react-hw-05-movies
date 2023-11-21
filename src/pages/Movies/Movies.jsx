import React, { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { TitlesList } from '../../components/TitlesList/TitlesList';
import { fetchSearchMovies } from 'js/api';
import Notiflix from 'notiflix';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function loadSearchMovies() {
      try {
        setIsLoading(true);
        const response = await fetchSearchMovies(query);
        if (response.length === 0) {
          Notiflix.Notify.warning(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          return;
        }
        setMovies(response);
      } catch (error) {
        Notiflix.Notify.failure(
          'Ooops... Something went wrong! Please, try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadSearchMovies();
  }, [query]);

  const handleSearch = myQuery => {
    setQuery(myQuery);
    setMovies([]);
  };

  return (
    <main>
      <Searchbar onSubmit={handleSearch} />
      {<TitlesList movies={movies} />}
      {isLoading && <Loader />}
    </main>
  );
};

export default Movies;