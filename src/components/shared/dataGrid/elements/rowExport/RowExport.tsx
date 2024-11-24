import type { RefObject } from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { IconButton, Tooltip } from '@mui/material';
import saveAs from 'file-saver';
import _ from 'lodash';
import { enqueueSnackbar } from 'notistack';
import { getAllGridData } from 'utils/datagrid/DataGrid.Utils';
import { utils, write } from 'xlsx';
import type { AgGridReact } from 'ag-grid-react';

interface IColumn<T> {
  key: keyof T;
  headerName: string;
}

interface RowExportProps<T extends Record<string, unknown>> {
  gridRef: RefObject<AgGridReact>;
  fileName: string;
  columns: IColumn<T>[];
}

const RowExport = <T extends Record<string, unknown>>({ gridRef, fileName, columns }: RowExportProps<T>) => {
  const exportToExcel = () => {
    const data = getAllGridData(gridRef);

    if (data.length === 0) {
      enqueueSnackbar(`There is no data to export`, { variant: 'info' });
      return;
    }

    const headers = columns.map(column => column.headerName);
    const mappedData = data.map(row => {
      const mappedRow: Record<string, unknown> = {};
      columns.forEach(column => {
        mappedRow[column.key as string] = _.get(row, column.key, '');
      });
      return mappedRow;
    });

    const worksheetData = [headers, ...mappedData.map(row => Object.values(row))];
    const worksheet = utils.aoa_to_sheet(worksheetData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' }) as Uint8Array;
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `${fileName}.xlsx`);
  };

  return (
    <Tooltip title="Export data to Excel">
      <IconButton color="primary" onClick={exportToExcel}>
        <FileDownloadIcon />
      </IconButton>
    </Tooltip>
  );
};

export default RowExport;
