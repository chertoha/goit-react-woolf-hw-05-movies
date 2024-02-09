import ErrorComponent from 'components/ErrorComponent';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';

const LoadingWrapper = ({ children, isLoading, error }) => {
  if (isLoading) return <Loader />;
  if (error) return <ErrorComponent message={error} />;

  return <>{children}</>;
};

export default LoadingWrapper;

LoadingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
