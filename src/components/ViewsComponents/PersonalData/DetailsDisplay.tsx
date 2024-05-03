import { Box, Typography } from '@mui/material';

interface Detail {
  icon: JSX.Element | ((value: boolean) => JSX.Element);
  name: string;
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
        const displayName = `${detail.name.charAt(0).toUpperCase() + detail.name.slice(1)}:`;
        const valueDisplay = detail.format ? detail.format(data[detail.name] as boolean) : data[detail.name];

        return (
          <Typography key={detail.name} sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
            {iconDisplay}
            <span style={{ marginLeft: 16, fontWeight: '600' }}>{displayName}</span>
            <span style={{ marginLeft: 16 }}>{valueDisplay}</span>
          </Typography>
        );
      })}
    </Box>
  );
}

export default DetailsDisplay;
