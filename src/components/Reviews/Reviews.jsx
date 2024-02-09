import ErrorComponent from 'components/ErrorComponent';
import LoadingWrapper from 'components/LoadingWrapper';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <LoadingWrapper error={error} isLoading={isLoading}>
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ErrorComponent message="Here are no reviews yet" />
        )}
      </div>
    </LoadingWrapper>
  );
};

export default Reviews;
