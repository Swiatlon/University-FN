import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import TodoListDrawer from 'components/shared/todoListDrawer/TodoListDrawer';
import { useGetStudentGradesQuery } from 'redux/apiSlices/academics/Grades.Api.Slice';
import { selectId } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import type { IGetStudentGradesQueryParams } from 'contract/slices/academics/Grades.Interfaces';
import './Dashboard.scss';

function Dashboard() {
  const studentId = useSelector(selectId);

  const initialQueryParams: IGetStudentGradesQueryParams = { studentId: studentId! };
  const { data: grades, isFetching } = useGetStudentGradesQuery(initialQueryParams, { skip: !studentId });

  return (
    <Box>
      <TodoListDrawer />
      <Box>
        {/* <Typography variant="h2">Hi {name + surname}!</Typography>
        <Typography variant="h4">
          Check your performacne stats to make sure you're on track with your academic goals!
        </Typography>
        <Typography>See all grades </Typography> */}
        {/* Wykres */}
      </Box>
    </Box>
  );
}

export default Dashboard;
