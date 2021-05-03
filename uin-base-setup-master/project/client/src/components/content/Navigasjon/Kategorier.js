import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

const Kategorier = ({ kategori, slug }) => (
  <Li key={slug}>
    <NavLink exact to={`/${slug}`} activeClassName="active"> {kategori}</NavLink>
  </Li>
);

export default Kategorier;
