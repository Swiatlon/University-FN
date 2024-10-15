import React from 'react';
import { Paper } from '@mui/material';
import DetailSection from 'components/viewsComponents/personalData/DetailSection';
import type { ISection } from 'routes/postAuth/personalData/student/StudentPersonalData';

interface IPersonalDetailsProps {
  sections: ISection[];
}

export function PersonalDetails({ sections }: IPersonalDetailsProps): React.ReactElement {
  return (
    <Paper className="DetailsPaper DetailsCenterPaper">
      {sections.map(section => (
        <DetailSection key={section.title} {...section} />
      ))}
    </Paper>
  );
}
