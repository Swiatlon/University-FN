import { useMemo } from 'react';
import DataGrid, { SearchBarVariantEnum } from 'components/shared/dataGrid/DataGrid';
import { gradesColumns } from './Columns';
import type { IGrade } from 'contract/interfaces/academics/Academics';

interface IGradesDataGridProps {
  grades: IGrade[];
}

const GradesDataGrid = ({ grades }: IGradesDataGridProps) => {
  const rowData: IGrade[] = useMemo(() => grades, [grades]);

  return (
    <DataGrid
      sx={{ height: '60vh', width: '100%', pb: 2 }}
      columnDefs={gradesColumns}
      rowData={rowData}
      searchVariant={SearchBarVariantEnum.FrontEnd}
      rowSelection="single"
      exportFileName="grades_export"
    />
  );
};

export default GradesDataGrid;
