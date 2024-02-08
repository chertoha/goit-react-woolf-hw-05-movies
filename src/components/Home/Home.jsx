import Container from 'components/Container';
import Section from 'components/Section';
import { Heading, ListWrapper } from './Home.styled';
import { useEffect, useState } from 'react';
import { getTrendings } from 'services/api';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';
import { useGetMoviesList } from 'hooks/useGetMoviesList';

const Home = () => {
  const { movies, error, isLoading } = useGetMoviesList({
    shouldSearch: false,
  });

  console.log(movies);
  return (
    <Section>
      <Container>
        <Heading>Trending today</Heading>

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

export default Home;
