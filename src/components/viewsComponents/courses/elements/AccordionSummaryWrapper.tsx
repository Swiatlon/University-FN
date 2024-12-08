import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummary, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface AccordionSummaryWrapperProps {
  level: number;
  title: string;
}

const AccordionSummaryWrapper: React.FC<AccordionSummaryWrapperProps> = ({ level, title }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const marginLeft = isSmallScreen ? level * 1.2 : level * 4;

  return (
    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ flexDirection: 'row-reverse', ml: marginLeft }}>
      <Typography sx={{ ml: 2 }}>{title}</Typography>
    </AccordionSummary>
  );
};

export default AccordionSummaryWrapper;
