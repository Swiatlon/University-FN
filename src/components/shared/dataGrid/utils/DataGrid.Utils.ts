import type { RefObject } from 'react';
import type { ColDef, IRowNode } from 'ag-grid-community';
import type { AgGridReact } from 'ag-grid-react';

export const getAllGridData = <T extends Record<string, unknown>>(gridRef: RefObject<AgGridReact>): T[] => {
  if (!gridRef.current) {
    return [];
  }

  const allRowData: T[] = [];

  gridRef.current.api.forEachNode((node: IRowNode) => {
    const rowData: Partial<T> = {};

    gridRef.current?.api.getAllGridColumns().forEach(column => {
      const colDef: ColDef = column.getColDef();
      const { field } = colDef;

      if (field) {
        const params = {
          rowNode: node,
          colKey: field,
          useFormatter: false,
        };

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const value = gridRef.current?.api.getCellValue(params);
        rowData[field as keyof T] = value as T[keyof T];
      }
    });

    allRowData.push(rowData as T);
  });

  return allRowData;
};
