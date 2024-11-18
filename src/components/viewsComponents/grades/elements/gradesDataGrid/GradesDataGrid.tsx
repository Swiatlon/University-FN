import { useMemo } from 'react';
import DataGrid from 'components/shared/dataGrid/DataGrid';
import { gradesColumns } from './Columns';
import type { IGrade } from 'contract/interfaces/academics/Academics';

interface IGradesDataGridProps {
  grades: IGrade[];
}

const GradesDataGrid = ({ grades }: IGradesDataGridProps) => {
  const rowData: IGrade[] = useMemo(() => grades, [grades]);

  return (
    <DataGrid
      sx={{ height: '70vh', width: '100%' }}
      columnDefs={gradesColumns}
      rowData={rowData}
      rowSelection="single"
    />
  );
};

export default GradesDataGrid;
