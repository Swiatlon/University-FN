import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import DataGrid from 'components/shared/dataGrid/DataGrid';
import { useGetStudentGradesQuery } from 'redux/apiSlices/academics/Grades.Api.Slice';
import { selectId } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import { selectAccountId } from 'redux/stateSlices/auth/Auth.State.Slice';
import { gradesColumns } from './Columns';
import type { IGrade } from 'contract/interfaces/academics/Academics';
import type { IGetStudentGradesQueryParams } from 'contract/slices/academics/Grades.Interfaces';

const GradesDataGrid = () => {
  const accountId = useSelector(selectAccountId);
  const studentId = useSelector(selectId);

  const initialQueryParams: IGetStudentGradesQueryParams = { accountId: accountId!, studentId: studentId! };
  const {
    data: grades,
    isFetching,
    error,
  } = useGetStudentGradesQuery(initialQueryParams, { skip: !accountId || !studentId });

  const rowData: IGrade[] = useMemo(() => grades ?? [], [grades]);

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <DataGrid
      sx={{ height: '70vh', width: '100%' }}
      columnDefs={gradesColumns}
      rowData={rowData}
      isLoading={isFetching}
      rowSelection="single"
    />
  );
};

export default GradesDataGrid;
