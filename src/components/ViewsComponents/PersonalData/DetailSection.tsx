import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { DetailRow, type IDetailRowProps } from './DetailRow';
import 'Routes/PostAuth/PersonalData/Styles/PersonalData.scss';

interface IDetailSectionProps {
  title: string;
  details: IDetailRowProps[];
}

function DetailSection({ title, details }: IDetailSectionProps) {
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
