import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Chip } from '@mui/material';
import { GradeValueEnum } from 'contract/enums/Enums';
import type { ColDef } from 'ag-grid-community';
import type { IGrade } from 'contract/interfaces/academics/Academics';

const PassedChipRenderer = ({ value }: { value: 'Passed' | 'Not passed' | null }) => {
  if (value === null) {
    return <> </>;
  }

  if (value === 'Passed') {
    return <Chip label="Passed" color="success" variant="filled" icon={<CheckCircleIcon />} />;
  }

  return <Chip label="Not Passed" color="error" variant="filled" icon={<CancelIcon />} />;
};

interface IExtendedColumns extends IGrade {
  passed: boolean | null;
}

export const gradesColumns: ColDef<IExtendedColumns>[] = [
  {
    headerName: 'ID',
    field: 'id',
    flex: 1,
    minWidth: 50,
    maxWidth: 100,
  },
  {
    headerName: 'Subject',
    field: 'subject.name',
    flex: 1,
    minWidth: 200,
    sort: 'asc',
    cellStyle: {
      fontWeight: 'bold',
    },
  },
  {
    headerName: 'Grade',
    field: 'grade',
    flex: 1,
    minWidth: 100,
    sortable: true,
  },
  { headerName: 'Pass Attempt', field: 'passDateAttempt', flex: 1, minWidth: 100, sortable: true, unSortIcon: true },
  {
    headerName: 'Passed',
    field: 'passed',
    flex: 1,
    minWidth: 180,
    valueGetter: ({ data }) => {
      const grade = data?.grade;

      if (!grade) {
        return null;
      }

      return grade > GradeValueEnum.Poor ? 'Passed' : 'Not passed';
    },
    cellRenderer: PassedChipRenderer,
  },
];
