import styled from 'styled-components/macro';
import Kategorier from './Kategorier';
import NavElements from './NavElements';
import headerLogo from '../ImagesForPages/outland-header.jpg';


const Navbar = () => {

const navitem  = NavElements()
;

console.log(navitem);

if (status === 'loading') return <p>Loading...</p>;
if (status === 'error') return <p>Noe gikk galt når data ble hentet. {navitem?.message}</p>;

const Ul = styled.ul`
  margin-top: 8vh;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.nav.background};
  height: 60px;

`
return (
<nav>
<img src={headerLogo} height="66px" />
  <>
  <Ul>
      {navitem?.length > 0 ? navitem.map((navitem) => <Kategorier key={navitem.slug} {...navitem} />)
      : null}
  </Ul>
  </>
</nav>

)
};

export default Navbar;
