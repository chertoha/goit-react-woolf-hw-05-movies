import ErrorComponent from 'components/ErrorComponent';
import LoadingWrapper from 'components/LoadingWrapper';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';
import { createImageUrl } from 'utils/createImageUrl';

const Cast = () => {
  const [cast, setCast] = useState([]);
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

  return (
    <LoadingWrapper isLoading={isLoading} error={error}>
      <div>
        {cast.length > 0 ? (
          <ul>
            {cast.map(({ id, character, name, profile_path }) => (
              <li key={id}>
                <img src={createImageUrl(profile_path)} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ErrorComponent message="There are no cast here" />
        )}
      </div>
    </LoadingWrapper>
  );
};

export default Cast;
