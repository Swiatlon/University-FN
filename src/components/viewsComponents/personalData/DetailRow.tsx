/* eslint-disable react/no-unused-prop-types */
import { Box, Typography } from '@mui/material';
import { IconComponent, type MuiIconsNameType } from './IconComponent';

export interface IDetailRowProps {
  icon: MuiIconsNameType;
  label?: string;
  value: string | number | boolean | undefined;
  nestedElements?: IDetailRowProps[];
  nestedTitle?: string;
}

export function DetailRow({ icon, label, value }: IDetailRowProps) {
  if (label) {
    return (
      <Box className="Row" sx={{ gridTemplateColumns: 'min-content auto' }}>
        <Box gap={1} className="SubTitleBox">
          <IconComponent name={icon} color="primary" />
          {label ? <Typography className="SubTitle">{label}:</Typography> : null}
        </Box>
        <Typography className="Label">{value?.toString() ?? 'N/A'}</Typography>
      </Box>
    );
  }

  return (
    <Box className="Row">
      <Box gap={1} className="SubTitleBox">
        <IconComponent name={icon} color="primary" />
        <Typography className="Label">{value?.toString() ?? 'N/A'}</Typography>
      </Box>
    </Box>
  );
}
