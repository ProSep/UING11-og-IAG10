import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import Register from '../Login/Register';
import Kategorier from './Kategorier';
import NavElements from './NavElements';
import { NavButton } from '../../../styles/Styles';
import SearchFetch from './SearchFetch';

// export const Navstatus = () => {
//   const {status}  = NavElements();

//   if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'error') return <p>Noe gikk galt når data ble hentet. {navitem?.message}</p>;
// };

const Navbar = () => {

const navitem  = NavElements();`

if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'error') return <p>Noe gikk galt når data ble hentet. {navitem?.message}</p>;`

console.log(navitem);

const Ul = styled.ul`
  margin-top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: 60px;
`
return (

<nav>
  <Ul>
    <NavButton>
      <NavLink exact to="/" activeClassName="active"> Home</NavLink>
    </NavButton>
    
      {navitem?.length > 0 ? navitem.map((navitem) => <Kategorier key={navitem.slug} {...navitem} />)
      : null}
      <Register />
      <SearchFetch />
    </Ul>
    
</nav>

)
};

export default Navbar;
