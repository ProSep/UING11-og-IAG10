import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import Kategorier from "./Kategorier";
import NavElements from "./NavElements";
import SearchFetch from "./SearchFetch";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import OutlandLogo from '../../images/logo-outland.jpeg';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};
  height: 50px;
  
  @media (${({ theme }) => theme.scale.small}) {
    height: fit-content;
    flex-wrap: nowrap;
    flex-direction: column;
}
`;

const HeaderBox = styled.section`
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 30px 0 30px 0;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  justify-content: space-between;
`;

const HandleKurv = styled.h1`
  color:  ${({ theme }) => theme.colors.dark};
  font-size: 18px;
  display: inline-block;
  margin: 0 10px 0 0;
  font-weight: 600;
`
const Logo = styled.img`
  display: inline-block;
  grid-column: 1;
  height: 50px;
`

const ShopingBox = styled.section`
  grid-column: 4;
  display: inline-block;
  margin: auto 0 auto auto;
  font-size: 26px;
`

const LoginBox = styled.section`
  grid-column: 3;
  display: inline-block;
  margin: auto 0 auto auto;
  font-size: 26px;
`

const Login = styled.section`
  color:  ${({ theme }) => theme.colors.dark};
  font-size: 18px;
  display: inline-block;
  margin: 0 10px 0 0;
  font-weight: 600;
`

const Container = styled.section`
  padding: 0rem 1rem 0rem 1rem;
  margin: 0 auto 0 auto;
  padding: 10px;
  @media (${({ theme }) => theme.scale.medium}) {
    width: 1400px;
  }
`;


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
          <LoginBox>
          <Login>Login/Register</Login>
            <AccountCircleOutlinedIcon fontSize="inherit"/>
            </LoginBox>
          <ShopingBox>
            <HandleKurv>Handle Kurv</HandleKurv>
            <ShoppingCartOutlinedIcon fontSize="inherit"/>
          </ShopingBox>
        </HeaderBox>
      </Container>
      <nav>
        <Ul>
          {navitem?.length > 0
            ? navitem.map((navitem) => (
                <Kategorier key={navitem.slug} {...navitem} />
              ))
            : null}
        </Ul>
      </nav>
    </header>
  );
};

export default Navbar;
