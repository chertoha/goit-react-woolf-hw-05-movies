import Container from 'components/Container';
import { ListWrapper } from 'components/Home/Home.styled';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import Section from 'components/Section';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMovie } from 'services/api';

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    findMovie(query)
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
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.searchMovie;
    setSearchParams(value === '' ? {} : { query: value });
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
