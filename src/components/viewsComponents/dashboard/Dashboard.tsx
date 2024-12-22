import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import CenteredLoader from 'components/shared/centeredLoader/CenteredLoader';
import TodoListDrawer from 'components/viewsComponents/dashboard/elements/todoListDrawer/TodoListDrawer';
import { useGetStudentGradesQuery } from 'redux/apiSlices/academics/Grades.Api.Slice';
import { selectId, useGetLoggedAccountBasicDataQuery } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import NoDataFound from '../../shared/noDataFound/NoDataFound';
import Announcements from './elements/announcements/Announcements';
import ClosestEvents from './elements/ClosestEvents';
import GradesSection from './elements/GradesSection';
import type { IGetStudentGradesQueryParams } from 'contract/slices/academics/Grades.Interfaces';
import './styles/Dashboard.scss';

function Dashboard() {
  const studentId = useSelector(selectId);
  const initialQueryParams: IGetStudentGradesQueryParams = { studentId: studentId! };
  const { data: userData, isFetching: isFetchingUserData } = useGetLoggedAccountBasicDataQuery();
  const { data: grades = [], isFetching: isFetchingGrades } = useGetStudentGradesQuery(initialQueryParams, {
    skip: !studentId,
  });

  if (isFetchingUserData || isFetchingGrades) {
    return <CenteredLoader />;
  }

  if (!userData) {
    return <NoDataFound />;
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, pb: 2 }}>
        <GradesSection grades={grades} userData={userData} />
        <ClosestEvents />
      </Box>
      <Announcements />
      <TodoListDrawer />
    </>
  );
}

export default Dashboard;
