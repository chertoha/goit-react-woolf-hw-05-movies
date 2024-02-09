import Container from 'components/Container';
import MovieCard from 'components/MovieCard';
import Section from 'components/Section';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

const MovieDetails = () => {
  const location = useLocation();

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

  const backUrl = location?.state?.from ?? '/';

  console.log(movie);

  if (!movie) return;

  const { title, overview, popularity, poster_path, genres } = movie;

  return (
    <Container>
      <Link to={backUrl}>Back</Link>

      {/* <div>Movie Data</div> */}

      <Section>
        <Container>
          <MovieCard
            title={title}
            overview={overview}
            userScore={popularity}
            imgSrc={poster_path}
            genres={genres}
          />
        </Container>
      </Section>

      <div>
        <h2>Additional information:</h2>

        <ul>
          <li>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </Container>
  );
};

export default MovieDetails;

// if id not found -> error!!!   /movies/1
