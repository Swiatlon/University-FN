import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Chip } from '@mui/material';
import { GradeValueEnum } from 'contract/enums/Enums';
import type { ColDef } from 'ag-grid-community';
import type { IGrade } from 'contract/interfaces/academics/Academics';

enum PassStatusEnum {
  Passed = 'Passed',
  NotPassed = 'Not Passed',
}

const PassedChipRenderer = ({ value }: { value: PassStatusEnum | null }) => {
  if (value === null) {
    return null;
  }

  if (value === PassStatusEnum.Passed) {
    return <Chip label={PassStatusEnum.Passed} color="success" variant="filled" icon={<CheckCircleIcon />} />;
  }

  return <Chip label={PassStatusEnum.NotPassed} color="error" variant="filled" icon={<CancelIcon />} />;
};

interface IExtendedColumns extends IGrade {
  passed: boolean | null;
}

export const gradesColumns: ColDef<IExtendedColumns>[] = [
  {
    headerName: 'ID',
    field: 'id',
    flex: 1,
    minWidth: 80,
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
    minWidth: 110,
    sortable: true,
  },
  { headerName: 'Pass Attempt', field: 'passDateAttempt', flex: 1, minWidth: 160, sortable: true, unSortIcon: true },
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

      return grade > GradeValueEnum.Poor ? PassStatusEnum.Passed : PassStatusEnum.NotPassed;
    },
    cellRenderer: PassedChipRenderer,
  },
];
