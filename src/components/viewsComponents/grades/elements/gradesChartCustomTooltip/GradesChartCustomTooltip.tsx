import { Box, Typography } from '@mui/material';

interface ICustomTooltipProps {
  active?: boolean;
  payload?: { payload: { grade: number; count: number } }[];
}

const GradesChartCustomTooltip = ({ active, payload }: ICustomTooltipProps) => {
  if (active && payload?.[0]) {
    const { grade, count } = payload[0].payload;

    return (
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 2,
          display: 'grid',
          gap: 1,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          Grade: {grade}
        </Typography>
        <Typography variant="subtitle2">Amount: {count}</Typography>
      </Box>
    );
  }

  return null;
};

export default GradesChartCustomTooltip;
