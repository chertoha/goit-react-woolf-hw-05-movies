import styled from 'styled-components';

export const Wrapper = styled('div')``;

export const List = styled('ul')`
  /* display: flex;
  flex-wrap: wrap; */

  display: grid;

  gap: 30px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const Item = styled('li')`
  /* flex-basis: calc((100% -20px) / 2); */

  /* width: 335px; */
  /* height: 400px; */
`;

export const Image = styled('img')`
  display: block;
  height: auto;
  width: 100%;

  /* width: 50%; */
  /* margin: 0 auto; */
  object-fit: cover;

  @media screen and (min-width: 768px) {
    /* width: 100px; */
  }
`;

export const Name = styled('p')`
  margin-top: 10px;
`;

export const Character = styled('p')`
  margin-top: 6px;
`;
