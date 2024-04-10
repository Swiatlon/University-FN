import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface isOpenProp {
  isOpen: boolean;
}

const shouldForwardProp = (prop: PropertyKey) => prop !== 'isOpen';
const minDrawerWidth = '60px';
const maxDrawerWidth = '260px';

export const Drawer = styled(Box, { shouldForwardProp })<isOpenProp>(({ isOpen }) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  height: '100vh',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, #041141 36%, #081131 46%, rgba(1, 16, 71, 1) 87%, rgba(6, 14, 44, 1) 100%)',

  '.ContentContainer': {
    width: isOpen ? maxDrawerWidth : minDrawerWidth,
    padding: 10,
    margin: 12,
    overflow: 'hidden',
    transition: '1s all',
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
      transition: '1s all',
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
      transition: '1s all',
      cursor: 'pointer',
      width: isOpen ? 60 : 40,
      height: 'auto',
      marginBottom: 4,
    },

    p: {
      whiteSpace: 'nowrap',
    },

    '.UserInfoDisplay': {
      transition: '0.5s opacity, 1s height, 1s width',
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
    marginTop: 24,
    display: 'grid',
    gap: 24,

    '.ListItem': {
      display: 'flex',
      alignItems: 'center',
      transition: '1s transform',
      cursor: 'pointer',
      padding: 0,

      '&:hover': {
        transform: 'scale(1.1)',
      },

      a: {
        textDecoration: 'none',
      },

      svg: {
        width: 27,
        height: 27,
        cursor: 'pointer',
      },
    },
  },

  '.IncreaseSizeAnimation': {
    transition: '1s transform',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
}));
