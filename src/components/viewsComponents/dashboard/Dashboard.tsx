import { useSelector } from 'react-redux';
import { Box, useMediaQuery } from '@mui/material';
import CenteredLoader from 'components/shared/centeredLoader/CenteredLoader';
import TodoListDrawer from 'components/shared/todoListDrawer/TodoListDrawer';
import { useGetStudentGradesQuery } from 'redux/apiSlices/academics/Grades.Api.Slice';
import { selectId, useGetLoggedAccountBasicDataQuery } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import Announcements from './elements/Announcements';
import ClosestEvents from './elements/ClosestEvents';
import GradesSection from './elements/GradesSection';
import type { IGetStudentGradesQueryParams } from 'contract/slices/academics/Grades.Interfaces';
import './Dashboard.scss';

function Dashboard() {
  const isMobile = useMediaQuery('(max-width: 500px)');
  const maxDrawerWidth = isMobile ? 280 : 450;

  const { data: userData, isFetching: isFetchingUserData } = useGetLoggedAccountBasicDataQuery();

  const studentId = useSelector(selectId);
  const initialQueryParams: IGetStudentGradesQueryParams = { studentId: studentId! };
  const { data: grades, isFetching: isFetchingGrades } = useGetStudentGradesQuery(initialQueryParams, {
    skip: !studentId,
  });

  const isFetching = isFetchingUserData || isFetchingGrades;

  if (isFetching || !userData) {
    return <CenteredLoader />;
  }

  return (
    <Box sx={{ p: 5 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
        }}
      >
        <Box>
          <GradesSection grades={grades} userData={userData} />
        </Box>
        <Box>
          <ClosestEvents />
        </Box>

        <Box>
          <Announcements />
        </Box>
      </Box>

      <TodoListDrawer maxDrawerWidth={maxDrawerWidth} />
    </Box>
  );
}

export default Dashboard;
