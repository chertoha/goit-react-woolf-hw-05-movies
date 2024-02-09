import PropTypes from 'prop-types';
import { createImageUrl } from 'utils/createImageUrl';

const MovieCard = ({ title, poster_path, overview, genres }) => {
  return (
    <div>
      <img src={createImageUrl(poster_path)} alt={title} />

      <div>
        <h1>{title}</h1>

        {/* <p>User score: {userScore.toFixed(0)}%</p> */}

        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>

        {genres && (
          <>
            <h2>Genres</h2>
            <p>
              {genres[0]?.name &&
                genres.map(({ name }) => <span key={name}>{name}&nbsp;</span>)}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
