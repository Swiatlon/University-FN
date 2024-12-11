import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface IIsOpenProp {
  isOpen: boolean;
}

const shouldForwardProp = (prop: PropertyKey) => prop !== 'isOpen';
const minDrawerWidth = '60px';
const maxDrawerWidth = '260px';
const minDrawerWidthMobile = 0;
const maxDrawerWidthMobile = '100vw';

export const Drawer = styled(Box, { shouldForwardProp })<IIsOpenProp>(({ isOpen }) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  height: '100vh',
  background: '#0448af',
  boxShadow: '0px 4px 2px #010102',
  zIndex: 1300,

  '& *': {
    color: 'white',
    fontFamily: 'Inter, sans-serif !important',
  },

  '.ContentContainer': {
    width: isOpen ? maxDrawerWidth : minDrawerWidth,
    padding: 10,
    margin: 12,
    overflow: 'hidden',
    transition: 'all 0.5s cubic-bezier(0, 0, 0.2, 1)',
    justifyContent: 'center',
  },

  '.IncreaseSizeAnimation': {
    transition: '0.3s transform',

    '&:hover': {
      transform: 'scale(1.08)',
    },
  },

  '.HeaderContainer': {
    display: 'flex',
    alignItems: 'center',
    height: '80px',

    '*': {
      cursor: 'pointer',
    },

    '.LogoContainer': {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      opacity: isOpen ? '1' : 0,
      width: isOpen ? '100%' : 0,
      transition: 'all 0.5s cubic-bezier(0, 0, 0.2, 1)',
    },

    '.MenuToggleIcon': {
      width: 35,
      height: 35,
      margin: 'auto',
      cursor: 'pointer',
      zIndex: 1,
    },
  },

  '.UserProfileContainer': {
    display: 'grid',
    justifyItems: 'center',
    textAlign: 'center',

    '.Avatar': {
      cursor: 'pointer',
      width: '40px',
      height: '40px',
      marginBottom: 4,
      transition: 'width 0.5s cubic-bezier(0, 0, 0.2, 1), transform 0.5s cubic-bezier(0, 0, 0.2, 1)',
    },

    p: {
      whiteSpace: 'nowrap',
    },

    '.UserInfoDisplay': {
      transition: '0.5s opacity, height 0.5s cubic-bezier(0, 0, 0.2, 1), width 0.5s cubic-bezier(0, 0, 0.2, 1)',
      opacity: isOpen ? 1 : 0,
      width: isOpen ? maxDrawerWidth : 0,
      height: isOpen ? 50 : 0,
      marginBottom: 16,
    },
  },

  '.Divider': {
    margin: '0px 4px 0px 0px',
  },

  '.List': {
    transition: '0.5s padding',
    marginTop: 24,
    paddingLeft: isOpen ? '0px' : '4px',
    display: 'grid',
    gap: 24,

    '.ListItem': {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      textWrap: 'noWrap',
      padding: 0,

      svg: {
        width: 27,
        height: 27,
        cursor: 'pointer',
      },

      '&.ListItemChildren': {
        svg: {
          transition: '1s margin',
          marginLeft: isOpen ? 20 : 4,
          width: 20,
          height: 20,
        },
      },

      '&.active .MuiTypography-root': {
        fontWeight: 'bold',
        borderRight: '2px solid white',
        display: 'inline',
        paddingRight: '10px',
      },
    },
  },

  '& a': {
    textDecoration: 'none',
  },

  '@media (max-width: 910px)': {
    '.ContentContainer': {
      transition: '1.5s all',
      margin: 'auto',
      padding: isOpen ? '24px' : 0,
      width: isOpen ? maxDrawerWidthMobile : minDrawerWidthMobile,
    },

    '.MenuToggleIcon': {
      display: isOpen ? 'block' : 'none',
    },
  },
}));
