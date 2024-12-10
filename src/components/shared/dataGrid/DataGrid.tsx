import { useRef } from 'react';
import { Divider, type BoxProps } from '@mui/material';
import { AgGridReact, type AgGridReactProps } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './styles/CustomAgGrid.scss';
import ColumnVisibilityDropdown from './elements/columnsVisibility/ColumnsVisibility';
import DataGridLoader from './elements/loader/DataGridLoader';
import Pagination from './elements/pagination/Pagination';
import RowExport from './elements/rowExport/RowExport';
import BackendSearchBar from './elements/searchBar/BackendSearchBar';
import FrontEndSearchBar from './elements/searchBar/FrontEndSearchBar';
import { DataGridContainer, DataGridWrapper, ToolbarContainer } from './styles/Containers';

interface IColumnDefWithField {
  field: string;
  headerName: string;
  hide?: boolean;
}

export enum SearchBarVariantEnum {
  BackEnd = 'BackEnd',
  FrontEnd = 'FrontEnd',
}

interface IAgGridBoxProps extends Omit<AgGridReactProps, 'pagination'> {
  sx?: BoxProps['sx'];
  isLoading?: boolean;
  handleSearch?: (value: string) => void;
  smallVersion?: boolean;
  searchVariant?: SearchBarVariantEnum;
  exportFileName?: string;
  pagination?: {
    setPagination: (page: number, pageSize: number) => void;
    page: number;
    pageSize: number;
    totalRows?: number;
  };
}

const DataGrid = ({
  sx,
  isLoading = false,
  handleSearch,
  pagination,
  columnDefs,
  searchVariant,
  smallVersion,
  exportFileName,
  ...props
}: IAgGridBoxProps) => {
  const gridRef = useRef<AgGridReact>(null);
  const columnsSettings =
    columnDefs
      ?.filter((col): col is IColumnDefWithField => 'field' in col)
      .map(col => ({
        key: col.field,
        field: col.field,
        headerName: col.headerName,
        hide: col.hide ?? false,
      })) ?? [];

  return (
    <DataGridContainer>
      {!smallVersion && (
        <ToolbarContainer>
          <ColumnVisibilityDropdown columnsSettings={columnsSettings} gridRef={gridRef} />
          <Divider sx={{ py: 1.5 }} />
          {exportFileName ? <RowExport columns={columnsSettings} gridRef={gridRef} fileName={exportFileName} /> : null}
          {searchVariant === SearchBarVariantEnum.FrontEnd && <FrontEndSearchBar gridRef={gridRef} />}
          {searchVariant === SearchBarVariantEnum.BackEnd && handleSearch ? (
            <BackendSearchBar onSearch={handleSearch} disabled={isLoading} />
          ) : null}
        </ToolbarContainer>
      )}

      <DataGridWrapper sx={sx} className="ag-theme-quartz">
        <AgGridReact
          {...props}
          columnDefs={columnDefs}
          defaultColDef={{ resizable: false, unSortIcon: true }}
          ref={gridRef}
        />
      </DataGridWrapper>

      {isLoading ? <DataGridLoader /> : null}
      {pagination ? <Pagination {...pagination} disabled={isLoading} /> : null}
    </DataGridContainer>
  );
};

export default DataGrid;
