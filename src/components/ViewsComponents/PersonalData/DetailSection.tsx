import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DetailRow, type DetailRowProps } from './DetailRow';
import 'Routes/PostAuth/PersonalData/Styles/PersonalData.scss';

interface DetailSectionProps {
  title: string;
  details: DetailRowProps[];
}

function DetailSection({ title, details }: DetailSectionProps) {
  return (
    <Accordion defaultExpanded disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" color="primary">
          {title}:
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {details.map(detail => (
          <DetailRow key={detail.label} {...detail} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default DetailSection;
