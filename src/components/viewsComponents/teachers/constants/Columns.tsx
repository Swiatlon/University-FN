import { ColDef } from 'ag-grid-community';

export const TeachersColumns: ColDef[] = [
  { headerName: 'ID', field: 'id', maxWidth: 100 },
  {
    headerName: 'Name',
    field: 'name',
    flex: 1,
    minWidth: 200,
    sort: 'asc',
    cellStyle: {
      fontWeight: 'bold',
    },
  },
  { headerName: 'Surname', field: 'surname', flex: 1, minWidth: 200 },
  { headerName: 'Email', field: 'contactEmail', flex: 2, minWidth: 300 },
  { headerName: 'Phone', field: 'contactPhone', flex: 2, minWidth: 150 },
];
