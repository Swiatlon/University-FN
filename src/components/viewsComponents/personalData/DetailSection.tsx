import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { DetailRow, type IDetailRowProps } from './DetailRow';
import 'routes/postAuth/personalData/styles/PersonalData.scss';

interface IDetailSectionProps {
  title: string;
  details: IDetailRowProps[];
  renderNested?: boolean;
}

function DetailSection({ title, details, renderNested }: IDetailSectionProps) {
  return (
    <Accordion defaultExpanded disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" color="primary">
          {title}:
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {details.map(detail => (
          <React.Fragment key={detail.label}>
            <DetailRow {...detail} />
            {renderNested && detail.nestedElements && detail.nestedElements.length > 0 ? (
              <DetailSection
                title={detail.nestedTitle ?? `Nested Elements for ${detail.value}`}
                details={detail.nestedElements}
                renderNested={renderNested}
              />
            ) : null}
          </React.Fragment>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default DetailSection;
