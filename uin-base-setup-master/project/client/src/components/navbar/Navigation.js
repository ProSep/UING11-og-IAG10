import { Navitems } from './Navitems';
import styled from 'styled-components/macro';

const A = styled.a`
  font-family: sans-serif;
  font-size: 1.3rem;
  background-color: #0df2c9;
`;

const Nav = styled.nav`
  background-color: #1a1a1a;
`

const Navbar = () => (
  <nav>
    <ul>
      {Navitems.map((item, index) => (
        <li key={index}>
          <A className={item.cName} href={item.url}>
            {item.title}
          </A>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
