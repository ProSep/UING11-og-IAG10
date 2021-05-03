import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

// Her må du legge til egne verdier
const theme = {
  nav: {
    background: '#000000',
    link: '#495234',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
