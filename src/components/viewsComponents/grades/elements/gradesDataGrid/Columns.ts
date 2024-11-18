import type { ColDef } from 'ag-grid-community';
import type { IGrade } from 'contract/interfaces/academics/Academics';

export const gradesColumns: ColDef<IGrade>[] = [
  {
    headerName: 'Subject',
    field: 'subject',
    flex: 1,
    minWidth: 200,
    valueGetter: ({ data }) => data?.subject.name,
  },
  { headerName: 'Grade', field: 'grade', flex: 1, minWidth: 100 },
  { headerName: 'PassDate', field: 'passDateAttempt', flex: 1, minWidth: 100 },
];
