import { ReactElement } from 'react';
import { Paper } from '@mui/material';
import DetailSection from 'components/viewsComponents/personalData/elements/DetailSection';

interface IAcademicInfoProps {
  degreeCourse: string;
  degreePath: string;
  modules: string[];
}

export function AcademicInfo({ degreeCourse, degreePath, modules }: IAcademicInfoProps): ReactElement {
  return (
    <Paper className="DetailsPaper">
      <DetailSection
        title="Academic Informations"
        details={[
          { icon: 'School', label: 'Degree Course', value: degreeCourse },
          { icon: 'Timeline', label: 'Degree Path', value: degreePath },
          { icon: 'LibraryBooks', label: 'Modules', value: modules.join(', ') },
        ]}
      />
    </Paper>
  );
}
