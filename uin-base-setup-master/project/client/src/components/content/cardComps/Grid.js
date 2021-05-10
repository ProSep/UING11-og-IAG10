import ProductImg1 from '../ImagesForPages/bøker-rr-3708666983.png';
import ProductImg2 from '../ImagesForPages/bøker-r-3708666983.png';
import ProductImg3 from '../ImagesForPages/xmanga-r-3708666983.png.pagespeed.ic.00t-kKiF4d.png';
import ProductImg4 from '../ImagesForPages/xspill-r-3708666983.png.pagespeed.ic.3BcyoSDPgb.png';
import ProductImg5 from '../ImagesForPages/xlego-r-3708666983.png.pagespeed.ic.7zl8hsSMQK.png';
import ProductImg6 from '../ImagesForPages/xeffekter-r-3708666983.png.pagespeed.ic.o64R7HlK4c.png';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Gridstyling = styled.section`
  display: grid;
  height: auto;
  margin: auto;
  padding: 10px;
  justify-items: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
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

/* <Cell height={5}>This is a bar</Cell>
    <Cell width={1}>baz</Cell> */
