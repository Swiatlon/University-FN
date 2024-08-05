import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SvgIconProps } from '@mui/material/SvgIcon';

interface RowComponentProps {
  IconComponent: React.ComponentType<SvgIconProps>;
  subtitle: string | undefined;
  label: string | undefined;
}

function RowComponent({ IconComponent, subtitle, label }: RowComponentProps) {
  return (
    <Box className="Row">
      <Box gap={1} className="SubTitleBox">
        <IconComponent />
        <Typography className="SubTitle">{subtitle}:</Typography>
      </Box>
      <Typography className="Label">{label}</Typography>
    </Box>
  );
}

export default RowComponent;
