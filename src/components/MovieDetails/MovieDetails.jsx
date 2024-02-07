import Container from 'components/Container';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();

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
