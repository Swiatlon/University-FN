import { ComponentType } from 'react';
import Box from '@mui/material/Box';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

interface IRowComponentProps {
  IconComponent: ComponentType<SvgIconProps>;
  subtitle: string | undefined;
  label: string | undefined;
}

function RowComponent({ IconComponent, subtitle, label }: IRowComponentProps) {
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
