import { ClientError } from '@sanity/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

// Her må du legge til egne verdier
const theme = {
  colors: {
    dark: 'rgb(32,28,28)',
    light: 'rgba(254,254,255,255)',
    brownish: 'rgba(249,249,249,255)',
  },
  font: {
    title: 'sans-serif',
  },
  scale: {

  }
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
