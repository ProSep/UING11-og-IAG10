import { ClientError } from '@sanity/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

// Her må du legge til egne verdier
const theme = {
  colors: {
    background: 'black',
    buttons: 'white',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
