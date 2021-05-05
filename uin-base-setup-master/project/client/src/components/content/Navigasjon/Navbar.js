import styled from 'styled-components/macro';
import Register from '../Login/Register';
import Kategorier from './Kategorier';
import NavElements from './NavElements';
import SearchBar from './SearchBar';

const Navbar = () => {

const navitem  = NavElements();

console.log(navitem);

if (status === 'loading') return <p>Loading...</p>;
if (status === 'error') return <p>Noe gikk galt når data ble hentet. {navitem?.message}</p>;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.nav.background};
  height: 60px;
`
return (
<nav>
  <Ul>
      {navitem?.length > 0 ? navitem.map((navitem) => <Kategorier key={navitem.slug} {...navitem} />)
      : null}
  </Ul>
  <SearchBar />
  <Register />
</nav>

)
};

export default Navbar;
