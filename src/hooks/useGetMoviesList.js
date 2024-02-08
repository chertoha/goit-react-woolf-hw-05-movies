import { useEffect, useState } from 'react';
import { findMovie, getTrendings } from 'services/api';

export const useGetMoviesList = ({ shouldSearch }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function manageMovieData() {
      try {
        setIsLoading(true);
        setError(null);

        let data;

        if (shouldSearch) {
          data = await findMovie(search);
        } else {
          data = await getTrendings();
        }

        console.log(data.results);
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    manageMovieData();
  }, [search, shouldSearch]);

  return { movies, setSearch, error, isLoading };
};
