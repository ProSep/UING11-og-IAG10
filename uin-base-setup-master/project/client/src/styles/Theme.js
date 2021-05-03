import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

// Her må du legge til egne verdier
const theme = {
  nav: {
    background: "pink",
    buttons: "black",
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
