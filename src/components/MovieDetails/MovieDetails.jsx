import Container from 'components/Container';
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

  return (
    <Container>
      <Link to={backUrl}>Back</Link>

      <div>Movie Data</div>

      <div>
        <h2>Additional information:</h2>

        <ul>
          <li>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default MovieDetails;
