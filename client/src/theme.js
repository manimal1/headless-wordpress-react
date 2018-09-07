import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: {
      main: '#1a237e',
    },
  },
  typography: {
    fontFamily: [
      '"Open Sans"',
      'sans-serif',
    ].join(','),
    headline: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.8rem',
    },
    title: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.5rem',
    },
  },
});

export default theme;
