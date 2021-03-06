import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  colors: {
    dark: 'rgb(32,28,28)',
    light: 'rgba(254,254,255,255)',
    brownish: 'rgba(249,249,249,255)',
    red: 'rgb(247, 66, 88)',
    grey: '#595959',
  },
  font: {
    title: 'sans-serif',
  },
  scale: {
    medium: 'min-width: 1500px',
    small: 'max-width: 1110px',
    xsmall: 'max-width: 1015px',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
