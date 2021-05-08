import styled from 'styled-components/macro';

export const Container = styled.section`
  padding: 0rem 1rem 0rem 1rem;
  margin: 0 auto 0 auto;
  @media (min-width: 1500px) {
  width: 1400px;
  }
`;

export const ProductsArea = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: center;
  height: auto;
`;

export const NavButton = styled.li`
  font-family: sans-serif;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.buttons};
  & a {
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #342e38;
      background-color: #fff;
    }
    &.active {
      text-decoration: underline;
    }
  }
`;