import { createTheme } from '@mui/material/styles';
import shadows, { type Shadows } from '@mui/material/styles/shadows';

const theme = createTheme({
  palette: {
    primary: {
      main: '#156beb',
      contrastText: '#070707',
    },
    text: {
      primary: '#070707;',
    },
  },
  typography: {
    h4: {
      fontWeight: 'bold',
      fontSize: '1.85rem',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: '64px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderRightWidth: 2,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&::before': {
            display: 'none',
          },
        },
      },
    },
  },
  shadows: shadows.map(() => 'none') as Shadows,
});
export default theme;
