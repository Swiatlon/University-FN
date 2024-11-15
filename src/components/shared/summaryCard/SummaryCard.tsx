import React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/system';

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  color: string;
  sx?: SxProps<Theme>;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, title, text, color, sx }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        padding: 2,
        borderRadius: 2,
        bgcolor: '#fff',
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          p: 1,
          backgroundColor: color,
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography variant="body1" component="h6" sx={{ fontWeight: 'bold', marginBottom: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default SummaryCard;
