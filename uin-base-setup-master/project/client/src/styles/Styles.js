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

export const ProductsAreaList = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  align-items: center;
  height: auto;
`;

export const NavButton = styled.li`
  font-family: ${({ theme }) => theme.font.title};
  font-size: 2.2rem;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.light};
  & a {
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    &:hover {
      color: ${({ theme }) => theme.colors.dark};
      background-color: ${({ theme }) => theme.colors.light};
    }
    &.active {
      text-decoration: underline;
    }
  }
`;
