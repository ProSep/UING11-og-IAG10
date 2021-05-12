import styled from "styled-components/macro";

// Keps the sides empty
export const Container = styled.section`
  padding: 0rem 1rem 0rem 1rem;
  margin: 0 auto 0 auto;
  padding: 10px;
  @media (${({ theme }) => theme.scale.medium}) {
    width: 1400px;
  }
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

// Styling for the content (which can also be used for all the pages)
export const StyleDeluxe1 = styled.section`
  background-color: #8ac0ff;
  border: 2px solid red;
  color: #000;
  width: 66rem;
  margin: 15px;
  margin-right: auto;
  margin-left: auto;
`;

// Styling for the header content//
// Specific meant for NavAbove.js, but it can also be applied for all the pages//
export const StyleDeluxe2 = styled.section`
  background-color: #fff;
  margin-top: 25px;
`;
// Styling for footer section//
export const StyleDeluxe3 = styled.section`
  background-color: #000;
  color: white;
  height: 100px;
`;

export const HeaderStyling = styled.header`
  padding: 1vh;
  margin-left: 86px;
`;

export const StyleDeluxe5 = styled.article`
  margin: auto;
  margin-top: 25px;
`;

export const StyleDeluxe6 = styled.article`
  margin: 10px;
`;


//Product styles

export const ProductH2 = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid;
`

export const ForfatterP = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  margin: 1rem;
  padding-top: 1rem;
  border-top: 1px solid;
`
export const SjangerP = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  margin: 1rem;
`
export const PrisTextP = styled.p`
  font-size: 1.3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  margin: 3rem 0 1rem 0;
  font-weight: bold;
`

export const PrisP = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  margin: 1rem;
  font-weight: bold;
`


//For searchpage and categorypages
export const Placment = styled.section`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-column-gap: 50px;
`

export const Mainpart = styled.section`
  grid-column: 2;
`

export const ProductsArea = styled.section`
  display: grid;
  grid-template-columns: ${(p) => p.grid};
  grid-gap: 20px;
  padding: 2rem 1rem 4rem 1rem;
  margin: 0 auto 0 auto;
`;

//Sidemenu
export const Sidebutton = styled.button`
  background-color: ${({ theme }) => theme.colors.light};
  display: grid;
  grid-template-rows: 4fr 1fr;
  text-decoration: none;
  border: none;
  padding-top: 20px;
  border-color: ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid;
  width: 100%;
`;
export const SideText = styled.div`
  grid-column: 1;
  margin: auto auto auto 0;
`;

export const MainText = styled.h2`
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
`

export const SideLabel = styled.label`
  grid-column: 2;
  margin: auto 0 auto auto;
`

export const Checkbox = styled.input`
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
`