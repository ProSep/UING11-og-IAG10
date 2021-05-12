import ProductImg1 from '../../images/ImagesForPages/Boker.png';
import ProductImg2 from '../../images/ImagesForPages/Tegneserier.png';
import ProductImg3 from '../../images/ImagesForPages/Manga.png';
import ProductImg4 from '../../images/ImagesForPages/Spill.png';
import ProductImg5 from '../../images/ImagesForPages/LEGO.png';
import ProductImg6 from '../../images/ImagesForPages/Effekter.png';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Gridstyling = styled.section`
  display: grid;
  height: auto;
  margin: auto;
  padding: 10px;
  justify-items: center;
`

const NavImgs = styled.img`
  height: 100px;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.brownish}
  }
`


const GridLayout = () => (
  <Gridstyling>
    <section height={10} width={10}>
    <NavLink exact to="/boker">
      <NavImgs src={ProductImg1}/>
    </NavLink>
    <NavLink exact to="/tegneserier">
      <NavImgs src={ProductImg2}/>
    </NavLink>
    <NavLink exact to="/manga">
      <NavImgs src={ProductImg3}/>
    </NavLink>
    <NavLink exact to="/spill">
      <NavImgs src={ProductImg4}/>
    </NavLink>
    <NavLink exact to="/lego">
      <NavImgs src={ProductImg5}/>
    </NavLink>
    <NavLink exact to="/samleobjekt">
      <NavImgs src={ProductImg6}/>
    </NavLink>
    </section>
  </Gridstyling>
);

export default GridLayout;