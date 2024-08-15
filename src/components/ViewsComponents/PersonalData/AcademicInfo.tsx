import React from 'react';
import { Paper } from '@mui/material';
import DetailSection from 'Components/ViewsComponents/PersonalData/DetailSection';

interface IAcademicInfoProps {
  degreeCourse: string;
  degreePath: string;
  modules: string[];
}

export function AcademicInfo({ degreeCourse, degreePath, modules }: IAcademicInfoProps): React.ReactElement {
  return (
    <Paper className="DetailsPaper">
      <DetailSection
        title="Academic Informations"
        details={[
          { icon: 'School', label: 'Kierunek', value: degreeCourse },
          { icon: 'Timeline', label: 'Sciezka', value: degreePath },
          { icon: 'LibraryBooks', label: 'Moduly', value: modules.join(', ') },
        ]}
      />
    </Paper>
  );
}
