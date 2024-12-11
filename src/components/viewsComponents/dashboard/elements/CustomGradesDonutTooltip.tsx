import { Box } from '@mui/material';

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    payload: {
      grade: string;
      count: number;
      fill: string;
    };
  }[];
}

const CustomGradesDonutTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload?.length && payload[0]) {
    const { grade, fill } = payload[0].payload;

    return (
      <Box
        sx={{
          backgroundColor: 'white',
          border: `2px solid ${fill}`,
          borderRadius: '50%',
          px: 1,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: fill,
          }}
        >
          {grade}
        </span>
      </Box>
    );
  }

  return null;
};

export default CustomGradesDonutTooltip;
