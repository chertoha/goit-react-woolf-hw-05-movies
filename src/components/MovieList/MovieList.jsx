import PropTypes from 'prop-types';

import { Item, List, MovieLink } from './MovieList.styled';

const MovieList = ({ list }) => {
  return (
    <List>
      {list.map(({ id, title }) => (
        <Item key={id}>
          <MovieLink to={`/movies/${id}`}>{title}</MovieLink>
        </Item>
      ))}
    </List>
  );
};

export default MovieList;

MovieList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
