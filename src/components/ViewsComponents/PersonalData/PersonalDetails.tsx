import React from 'react';
import { Paper } from '@mui/material';
import DetailSection from 'Components/ViewsComponents/PersonalData/DetailSection';
import type { Section } from 'Routes/PostAuth/PersonalData/Student/StudentPersonalData';

interface PersonalDetailsProps {
  sections: Section[];
}

export function PersonalDetails({ sections }: PersonalDetailsProps): React.ReactElement {
  return (
    <Paper className="DetailsPaper DetailsCenterPaper">
      {sections.map(section => (
        <DetailSection key={section.title} {...section} />
      ))}
    </Paper>
  );
}
