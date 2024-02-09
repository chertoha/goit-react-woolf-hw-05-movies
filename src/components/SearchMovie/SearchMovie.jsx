import Container from 'components/Container';
import { ListWrapper } from 'components/Home/Home.styled';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import Section from 'components/Section';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMovie } from 'services/api';
import { SearchField, SearchForm, SubmitButton } from './SearchMovie.styled';
import { IoIosSearch } from 'react-icons/io';
import LoadingWrapper from 'components/LoadingWrapper';
import ErrorComponent from 'components/ErrorComponent';

const SearchMovie = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    findMovie(query)
      .then(({ results }) => {
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
        <SearchForm autoComplete="off" onSubmit={onSubmit}>
          <SearchField type="text" name="searchMovie" />
          <SubmitButton type="submit">
            <IoIosSearch size={16} />
          </SubmitButton>
        </SearchForm>

        {query && (
          <LoadingWrapper isLoading={isLoading} error={error}>
            <ListWrapper>
              {movies.length > 0 ? (
                <MovieList list={movies} />
              ) : (
                <ErrorComponent message="Found none" />
              )}
            </ListWrapper>
          </LoadingWrapper>
        )}
      </Container>
    </Section>
  );
};

export default SearchMovie;
