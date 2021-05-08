import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavButton } from '../../../styles/Styles';

const Kategorier = ({ kategori, slug }) => (
  <NavButton key={slug}>
    <NavLink exact to={`/${slug}`} activeClassName="active">
      {kategori}
    </NavLink>
  </NavButton>
);

export default Kategorier;
