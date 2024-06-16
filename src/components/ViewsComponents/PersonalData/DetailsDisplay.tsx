import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createElement } from 'react';
import './DetailsDisplay.scss';

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
  const renderIcon = (icon: JSX.Element | ((value: boolean) => JSX.Element), value: boolean) => {
    return typeof icon === 'function' ? icon(value) : icon;
  };

  const renderValue = (format: ((value: boolean) => JSX.Element) | undefined, value: boolean | string) => {
    if (format) {
      return createElement(format, { hasPermission: value });
    }
    return value;
  };

  return (
    <Box className="DetailsBox">
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography variant="h6" color="primary" className="Title">
            {title}:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {details.map(detail => {
            const value = Boolean(data[detail.name]);
            const iconDisplay = renderIcon(detail.icon, value);
            const valueDisplay = renderValue(detail.format, data[detail.name]);

            return (
              <Typography key={detail.name} className="Row">
                <Box gap={1} className="SubTitleBox">
                  {iconDisplay}
                  <Typography className="SubTitle">{detail.label}:</Typography>
                </Box>
                <Typography className="Label">{valueDisplay}</Typography>
              </Typography>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <Box className="DetailsBox">
      <Typography variant="h6" color="primary" className="Title">
        {title}:
      </Typography>
    </Box>
  );
}

export default DetailsDisplay;
