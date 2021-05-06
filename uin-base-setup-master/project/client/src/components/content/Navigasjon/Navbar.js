import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import Register from '../Login/Register';
import Kategorier from './Kategorier';
import NavElements from './NavElements';
import SearchBar from './SearchBar';

const Navbar = () => {

const navitem  = NavElements()
;

console.log(navitem);

if (status === 'loading') return <p>Loading...</p>;
if (status === 'error') return <p>Noe gikk galt når data ble hentet. {navitem?.message}</p>;

const Ul = styled.ul`
  margin-top: 15vh;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.nav.background};
  height: 60px;
`
const Li = styled.li`
  font-family: sans-serif;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.nav.buttons};
  & a {
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #ccc;
    }
    &.active {
      text-decoration: underline;
    }
  }
`;
return (

<nav>
  <Ul>
    <Li>
      <NavLink exact to="/" activeClassName="active"> Home</NavLink>
    </Li>
    
      {navitem?.length > 0 ? navitem.map((navitem) => <Kategorier key={navitem.slug} {...navitem} />)
      : null}

      <Li>
      <NavLink exact to="/search/results/searching" activeClassName="active"> Search</NavLink>
    </Li>
    <SearchBar />
    <Register />
    </Ul>
</nav>

)
};

export default Navbar;
