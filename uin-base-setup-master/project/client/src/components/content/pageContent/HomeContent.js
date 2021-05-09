import { Grid, Cell } from 'styled-css-grid';
import { StyleDeluxe6 } from '../../../styles/Styles';

const HomeContent = () => (
  <StyleDeluxe6>
    <Grid columns={7} gap="2px">
      <Cell middle>
        This is frontpage. Refresh for contents to reveal itself! Localhost:3000
        is the port. This is just another test
      </Cell>
      <Cell height={2}>bar</Cell>
      <Cell width={2}>baz</Cell>
    </Grid>
    <h3>
      This is frontpage. Refresh for contents to reveal itself! Localhost:3000
      is the port. This is just another test
    </h3>
  </StyleDeluxe6>
);

export default HomeContent;

/*
const HomeContent = () => (
  <StyleDeluxe6>
    <h3>
      This is frontpage. Refresh for contents to reveal itself! Localhost:3000
      is the port. This is just another test
    </h3>
  </StyleDeluxe6>
); */
