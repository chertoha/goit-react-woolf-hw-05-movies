import AdditionalInfo from 'components/AdditionalInfo';
import BackLink from 'components/BackLink';
import Container from 'components/Container';
import LoadingWrapper from 'components/LoadingWrapper';
import MovieCard from 'components/MovieCard';
import Section from 'components/Section';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  console.log(movie);

  return (
    <div>
      <Container>
        <BackLink />
      </Container>

      <LoadingWrapper isLoading={isLoading} error={error}>
        <Section>
          <Container>
            <MovieCard {...movie} />
          </Container>
        </Section>

        <div>
          <Container>
            <AdditionalInfo />
          </Container>
        </div>
      </LoadingWrapper>

      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </div>
  );
};

export default MovieDetails;

// if id not found -> error!!!   /movies/1
