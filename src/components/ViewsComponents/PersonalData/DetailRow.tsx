import { Box, Typography } from '@mui/material';
import { IconComponent, type MuiIconsName } from './IconComponent';

export interface DetailRowProps {
  icon: MuiIconsName;
  label: string;
  value: string | number | boolean | undefined;
}

export function DetailRow({ icon, label, value }: DetailRowProps) {
  return (
    <Box className="Row">
      <Box gap={1} className="SubTitleBox">
        <IconComponent name={icon} color="primary" />
        <Typography className="SubTitle">{label}:</Typography>
      </Box>
      <Typography className="Label">{value?.toString() ?? 'N/A'}</Typography>
    </Box>
  );
}
