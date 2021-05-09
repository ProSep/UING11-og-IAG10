import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import Register from "../Login/Register";
import Kategorier from "./Kategorier";
import NavElements from "./NavElements";
import { NavButton } from "../../../styles/Styles";
import SearchFetch from "./SearchFetch";

const HeaderBox = styled.section`
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 30px;
  display: flex;
`;

const Ul = styled.ul`
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.colors.dark};
height: 50px;
`;

const Navbar = () => {
  const navitem = NavElements();
  `

if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'error') return <p>Noe gikk galt når data ble hentet. {navitem?.message}</p>;`;

  console.log(navitem);


  return (
    <header>
      <HeaderBox>
        <SearchFetch />
      </HeaderBox>
      <nav>
        <Ul>
          <NavButton>
            <NavLink exact to="/" activeClassName="active">
              {" "}
              Home
            </NavLink>
          </NavButton>
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
