import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ToolbarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

export const DataGridContainer = styled(Box)(({ theme }) => ({
  background: 'white',
  borderRadius: theme.shape.borderRadius,
}));

export const DataGridWrapper = styled(Box)(({ theme }) => ({
  zIndex: 100,
  position: 'relative',
}));
