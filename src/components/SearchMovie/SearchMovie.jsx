import Container from 'components/Container';
import { ListWrapper } from 'components/Home/Home.styled';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import Section from 'components/Section';
import { useEffect, useState } from 'react';
import { findMovie, getTrendings } from 'services/api';

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    findMovie(search)
      .then(({ results }) => {
        console.log(results);
        setMovies(results);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);

  const onSubmit = e => {
    e.preventDefault();
    setSearch(e.target.elements.searchMovie.value);
  };

  return (
    <Section>
      <Container>
        <div>
          <form autoComplete="off" onSubmit={onSubmit}>
            <input type="text" name="searchMovie" />
            <button type="submit">Search</button>
          </form>
        </div>

        {isLoading && <Loader />}

        <ListWrapper>
          {!error & (movies.length >= 0) ? (
            <MovieList list={movies} />
          ) : (
            <div>Error. Something went wrong</div>
          )}
        </ListWrapper>
      </Container>
    </Section>
  );
};

export default SearchMovie;
