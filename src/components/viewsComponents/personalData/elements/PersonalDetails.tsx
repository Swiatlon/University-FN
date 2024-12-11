import { ReactElement } from 'react';
import { Paper } from '@mui/material';
import DetailSection from 'components/viewsComponents/personalData/elements/DetailSection';
import type { ISection } from 'components/viewsComponents/personalData/StudentPersonalData';

interface IPersonalDetailsProps {
  sections: ISection[];
}

export function PersonalDetails({ sections }: IPersonalDetailsProps): ReactElement {
  return (
    <Paper className="DetailsPaper DetailsCenterPaper">
      {sections.map(section => (
        <DetailSection key={section.title} {...section} />
      ))}
    </Paper>
  );
}
