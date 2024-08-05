import React from 'react';
import * as Icons from '@mui/icons-material';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export type MuiIconsName = keyof typeof Icons;

interface IconComponentProps extends SvgIconProps {
  name: MuiIconsName;
}

const iconComponents: { [K in MuiIconsName]: React.ComponentType<SvgIconProps> } = Icons;

export function IconComponent({ name, ...props }: IconComponentProps): React.ReactElement {
  const SpecificIcon = iconComponents[name];

  return <SpecificIcon {...props} />;
}
