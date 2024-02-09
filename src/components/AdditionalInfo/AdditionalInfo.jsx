import {
  Heading2,
  Item,
  List,
  StyledLink,
  Wrapper,
} from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <Wrapper>
      <Heading2>Additional information:</Heading2>

      <List>
        <Item>
          <StyledLink to="cast">Cast</StyledLink>
        </Item>
        <Item>
          <StyledLink to="reviews">Reviews</StyledLink>
        </Item>
      </List>
    </Wrapper>
  );
};

export default AdditionalInfo;
