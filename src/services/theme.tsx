import type { TProvider } from '@/types/common';
import { CssBaseline, ThemeProvider as MThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      100: '#8F9DDA',
      400: '#3D54B8',
      500: '#273576',
      700: '#273576',
      main: '#273576',
    },
    secondary: {
      main: '#E86825',
    },
  },
  typography: {
    fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const ThemeProvider: TProvider = ({ children }) => (
  <MThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MThemeProvider>
);

export default ThemeProvider;
