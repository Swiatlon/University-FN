import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DataGrid from 'components/shared/dataGrid/DataGrid';
import type { GradeValueEnum } from 'contract/enums/Enums';

interface DataGridWrapperProps {
  rowData: { id: number; name: string; grade: GradeValueEnum | null }[];
  columnDefs: { field: string; headerName: string; flex: number }[];
}

const DataGridWrapper: React.FC<DataGridWrapperProps> = ({ rowData, columnDefs }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const marginLeft = isSmallScreen ? '0px' : '76px';
  const width = isSmallScreen ? '100%' : '80%';

  return (
    <DataGrid sx={{ height: '320px', width, ml: marginLeft }} columnDefs={columnDefs} smallVersion rowData={rowData} />
  );
};

export default DataGridWrapper;
