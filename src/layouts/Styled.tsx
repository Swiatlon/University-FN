import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)({
  display: 'flex',
  overflowX: 'hidden',
  position: 'relative',
  height: '100%',
});

export const Content = styled(Box)({
  width: '100%',
});
