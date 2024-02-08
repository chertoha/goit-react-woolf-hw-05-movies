import Container from 'components/Container';
import { ListWrapper } from 'components/Home/Home.styled';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import Section from 'components/Section';
import { useGetMoviesList } from 'hooks/useGetMoviesList';
import { useEffect, useState } from 'react';
import { findMovie, getTrendings } from 'services/api';

const SearchMovie = () => {
  const { movies, setSearch, error, isLoading } = useGetMoviesList({
    shouldSearch: true,
  });

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
