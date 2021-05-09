import { Grid, Cell } from 'styled-css-grid';
import '../pageContent/grid-test.css';
import ProductImg1 from '../ImagesForPages/kaiju-png-kaiju-pacific-rim-png.png';

const GridLayout = () => (
  <Grid className="grid-test-columns">
    <Cell height={10} width={10}>
      <img src={ProductImg1} height="400px" />
      <img src={ProductImg1} height="400px" />
      <img src={ProductImg1} height="400px" />
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
