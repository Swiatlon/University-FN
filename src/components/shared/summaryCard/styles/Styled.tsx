import { Box, styled, Typography } from '@mui/material';

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

export const CardIconRoundedContainer = styled(Box)<{ color: string }>(({ color }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  backgroundColor: color,
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(0.5),
}));

export const CardSubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
