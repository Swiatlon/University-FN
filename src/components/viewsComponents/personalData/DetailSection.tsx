import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import { DetailRow, type IDetailRowProps } from './DetailRow';
import 'routes/postAuth/personalData/styles/PersonalData.scss';

interface IDetailSectionProps {
  title: string;
  details: IDetailRowProps[];
  renderNested?: boolean;
  nestedList?: boolean;
  defaultExpanded?: boolean;
  className?: string;
}

function DetailSection({
  title,
  details,
  renderNested,
  defaultExpanded = true,
  className,
  nestedList,
}: IDetailSectionProps) {
  return (
    <Accordion defaultExpanded={defaultExpanded} disableGutters className={className}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" color="primary">
          {title}:
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={nestedList ? 'NestedDetailsCenterPaper' : 'DetailsCenterPaper'}>
        {details.map(detail => (
          <Box key={detail.label}>
            <DetailRow {...detail} />
            {renderNested && detail.nestedElements && detail.nestedElements.length > 0 ? (
              <DetailSection
                defaultExpanded={false}
                title={detail.nestedTitle ?? `Nested Elements for ${detail.value}`}
                details={detail.nestedElements}
                renderNested={renderNested}
                nestedList
              />
            ) : null}
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default DetailSection;
