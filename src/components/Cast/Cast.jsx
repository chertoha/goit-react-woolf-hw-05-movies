import Container from 'components/Container';
import Section from 'components/Section';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';
import { createImageUrl } from 'utils/createImageUrl';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getCast(movieId)
      .then(({ cast }) => {
        console.log(cast);
        setCast(cast);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!cast) return;

  return (
    <div>
      {cast.length > 0 && (
        <ul>
          {cast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <img src={createImageUrl(profile_path)} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
