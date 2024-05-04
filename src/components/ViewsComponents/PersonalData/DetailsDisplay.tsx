import { Box, Typography } from '@mui/material';
import { createElement } from 'react';

interface Detail {
  icon: JSX.Element | ((value: boolean) => JSX.Element);
  name: string;
  label: string;
  format?: (value: boolean) => JSX.Element;
}

interface DetailsDisplayProps {
  title: string;
  details: Detail[];
  data: Record<string, boolean | string>;
}

function DetailsDisplay({ title, details, data }: DetailsDisplayProps) {
  return (
    <Box>
      <Typography variant="h6" color="primary" fontWeight="bold">
        {title}:
      </Typography>
      {details.map(detail => {
        //TODO: IN FUTURE TRY TO CHECK
        const iconDisplay = typeof detail.icon === 'function' ? detail.icon(Boolean(data[detail.name])) : detail.icon;
        const displayName = detail.label;
        const valueDisplay = detail.format ? createElement(detail.format, { hasPermission: data[detail.name] }) : data[detail.name];

        return (
          <Typography key={detail.name} sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
            {iconDisplay}
            <span style={{ marginLeft: 16, fontWeight: '600' }}>{displayName}:</span>
            <span style={{ marginLeft: 16 }}>{valueDisplay}</span>
          </Typography>
        );
      })}
    </Box>
  );
}

export default DetailsDisplay;
