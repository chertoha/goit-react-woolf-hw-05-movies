import PropTypes from 'prop-types';
import { createImageUrl } from 'utils/createImageUrl';

const MovieCard = ({ title, imgSrc, userScore, overview, genres }) => {
  return (
    <div>
      <img src={createImageUrl(imgSrc)} alt={title} />

      <div>
        <h1>{title}</h1>

        {/* <p>User score: {userScore.toFixed(0)}%</p> */}

        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>

        <h2>Genres</h2>
        <p>
          {genres.name &&
            genres.map(({ name }) => <span key={name}>{name}&nbsp;</span>)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  userScore: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};
