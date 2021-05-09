import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import Register from "../Login/Register";
import Kategorier from "./Kategorier";
import NavElements from "./NavElements";
import { Container } from "../../../styles/Styles";
import SearchFetch from "./SearchFetch";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import OutlandLogo from "../../../imgs/logo-outland.jpeg"

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};
  height: 50px;
`;

const HeaderBox = styled.section`
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 30px 0 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
`;

const HandleKurv = styled.h1`
  color:  ${({ theme }) => theme.colors.dark};
  font-size: 16px;
  display: inline-block;
  margin-right: 10px;
`
const Logo = styled.img`
  display: inline-block;
  grid-column: 1;
  height: 50px;
`

const Shoping = styled.section`
  grid-column: 3;
  display: inline-block;
  margin-left: auto;
`

const Navbar = () => {
  const navitem = NavElements();
`

if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'error') return <p>Noe gikk galt når data ble hentet. {navitem?.message}</p>;`;

  console.log(navitem);


  return (
    <header>
      <Container>
        <HeaderBox>
          <NavLink exact to="/">
            <Logo src={OutlandLogo}/>
          </NavLink>
          <SearchFetch />
          <Shoping>
            <HandleKurv>Handle Kurv</HandleKurv>
            <ShoppingCartOutlinedIcon fontSize="large"/>
          </Shoping>
        </HeaderBox>
      </Container>
      <nav>
        <Ul>
          {navitem?.length > 0
            ? navitem.map((navitem) => (
                <Kategorier key={navitem.slug} {...navitem} />
              ))
            : null}
          <Register />
        </Ul>
      </nav>
    </header>
  );
};

export default Navbar;
