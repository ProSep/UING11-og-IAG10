import styled from 'styled-components/macro';
import { Navitems } from './Navitems';

const NavLink = styled.a`
  font-family: sans-serif;
  font-size: 1.3rem;
  //background-color: #0df2c9;
`;

/* const Nav = styled.nav`
  background-color: #1a1a1a;
`;
*/

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.nav.background};
  display: flex;
  align-items: center;
  height: 50px;
`;

const StyledNavUl = styled.ul`
  display: flex;
  margin-top: 15px;
  padding: 25rem;
`;

const StyledNavLi = styled.li`
  color: ${({ theme }) => theme.nav.link};
  font-size: 1.9rem;
  margin: 15px;
  padding: 10px;
  & a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #ce2029;
    }
    &.active {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => (
  <StyledNav>
    <StyledNavUl>
      {Navitems.map((item, index) => (
        <StyledNavLi key={index}>
          <NavLink className={item.cName} href={item.url}>
            {item.title}
          </NavLink>
        </StyledNavLi>
      ))}
    </StyledNavUl>
  </StyledNav>
);

export default Navbar;
