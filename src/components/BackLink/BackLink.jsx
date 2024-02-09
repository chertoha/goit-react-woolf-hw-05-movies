import { useLocation } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { StyledLink } from './BackLink.styled';

const BackLink = () => {
  const location = useLocation();

  const backUrl = location?.state?.from ?? '/';
  return (
    <StyledLink to={backUrl}>
      <FaArrowLeftLong /> Go back
    </StyledLink>
  );
};

export default BackLink;
