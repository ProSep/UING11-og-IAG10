import { Grid, Cell } from 'styled-css-grid';
import '../pageContent/grid-styling.css';
import ProductImg1 from '../ImagesForPages/404.jpg';
import ProductImg2 from '../ImagesForPages/bøker-r-3708666983.png';
import ProductImg3 from '../ImagesForPages/xmanga-r-3708666983.png.pagespeed.ic.00t-kKiF4d.png';
import ProductImg4 from '../ImagesForPages/xspill-r-3708666983.png.pagespeed.ic.3BcyoSDPgb.png';
import ProductImg5 from '../ImagesForPages/xlego-r-3708666983.png.pagespeed.ic.7zl8hsSMQK.png';
import ProductImg6 from '../ImagesForPages/xeffekter-r-3708666983.png.pagespeed.ic.o64R7HlK4c.png';

const GridLayout = () => (
  <Grid className="grid-styling">
    <Cell height={10} width={10}>
      <img src={ProductImg1} height="100px" />
      <img src={ProductImg2} height="100px" />
      <img src={ProductImg3} height="100px" />
      <img src={ProductImg4} height="100px" />
      <img src={ProductImg5} height="100px" />
      <img src={ProductImg6} height="100px" />
    </Cell>
    <Cell height={15}>
      <article>slmgsdlsdlg</article>
      This is just a cell test
    </Cell>

    <p>sghdsigndskgsk</p>
  </Grid>
);

export default GridLayout;

/* <Cell height={5}>This is a bar</Cell>
    <Cell width={1}>baz</Cell> */
