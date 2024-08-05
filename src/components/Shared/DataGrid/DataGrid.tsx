import { Box, type BoxProps } from '@mui/material';
import { AgGridReact, type AgGridReactProps } from 'ag-grid-react';
import SearchBar from './Elements/SearchBar/SearchBar';
import Pagination from './Elements/Pagination/Pagination';
import DataGridLoader from './Elements/Loader/DataGridLoader';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './CustomAgGrid.scss';

interface AgGridBoxProps extends Omit<AgGridReactProps, 'pagination'> {
  sx?: BoxProps['sx'];
  isLoading?: boolean;
  handleSearch?: (value: string) => void;
  pagination?: {
    setPagination: (page: number, pageSize: number) => void;
    page: number;
    pageSize: number;
    totalRows?: number;
  };
}

function DataGrid({ sx, isLoading = false, handleSearch, pagination, ...props }: AgGridBoxProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      {handleSearch ? <SearchBar onSearch={handleSearch} disabled={isLoading} /> : null}
      <Box
        className="ag-theme-material"
        sx={{
          ...sx,
          zIndex: 100,
          position: 'relative',
        }}
      >
        <AgGridReact {...props} rowData={props.rowData} defaultColDef={{ resizable: false }} />
      </Box>
      {isLoading ? <DataGridLoader /> : null}
      {pagination ? <Pagination {...pagination} disabled={isLoading} /> : null}
    </Box>
  );
}

export default DataGrid;
