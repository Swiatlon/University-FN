import { createTheme } from '@mui/material/styles';
import shadows, { type Shadows } from '@mui/material/styles/shadows';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    customColors: {
      deepRed: string;
      orange: string;
      blue: string;
      darkGreen: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      deepRed: string;
      orange: string;
      blue: string;
      darkGreen: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#476d94',
    },
    text: {
      primary: '#070707;',
    },
    customColors: {
      deepRed: '#c40101',
      orange: '#ff9800',
      blue: '#2196f3',
      darkGreen: '#09750d',
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
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'none',
          padding: '8px 16px',
        },
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
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: '#0448af',
          color: '#fff',
          fontWeight: 'bold',
          paddingLeft: '32px',
        },
      },
    },
  },
  shadows: shadows.map(() => 'none') as Shadows,
});
export default theme;
