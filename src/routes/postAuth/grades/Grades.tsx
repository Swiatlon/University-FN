import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import DataGrid from 'components/shared/dataGrid/DataGrid';
import { useGetStudentGradesQuery } from 'redux/apiSlices/academics/Grades.Api.Slice';
import { selectAccountId } from 'redux/stateSlices/auth/Auth.State.Slice';
import type { IGetStudentGradesQueryParams } from 'contract/slices/academics/Grades.Interfaces';

const Grades = () => {
  const accountId = useSelector(selectAccountId);
  const initialQueryParams: IGetStudentGradesQueryParams = { id: accountId! };
  const { data, isFetching, error } = useGetStudentGradesQuery(initialQueryParams);

  const rowData = useMemo(() => data?.grades ?? [], [data]);
  const columns = useMemo(
    () => [
      { headerName: 'Subject', field: 'subject', flex: 1, minWidth: 200 },
      { headerName: 'Grade', field: 'grade', flex: 1, minWidth: 200 },
      { headerName: 'PassDate', field: 'passDate', flex: 2, minWidth: 300 },
    ],
    []
  );

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <Box>
      <DataGrid
        sx={{ height: '70vh', width: '100%' }}
        columnDefs={columns}
        rowData={rowData}
        isLoading={isFetching}
        rowSelection="single"
      />
    </Box>
  );
};

export default Grades;
