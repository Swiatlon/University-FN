import { Box, styled, Typography } from '@mui/material';

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

export const CardIconRoundedContainer = styled(Box)<{ color: string }>(({ theme, color }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  padding: theme.spacing(1.5),
  backgroundColor: color,
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(0.5),
}));

export const CardSubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
