import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import CenteredLoader from 'components/shared/centeredLoader/CenteredLoader';
import TodoListDrawer from 'components/viewsComponents/dashboard/elements/todoListDrawer/TodoListDrawer';
import { staticEvents } from 'components/viewsComponents/events/constants/EventsData';
import { getClosestEvents } from 'components/viewsComponents/grades/utils/Helpers';
import { useGetStudentGradesQuery } from 'redux/apiSlices/academics/Grades.Api.Slice';
import { selectId, useGetLoggedAccountBasicDataQuery } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import Announcements from './elements/announcements/Announcements';
import { announcementsData } from './elements/announcements/AnnouncementsData';
import ClosestEvents from './elements/ClosestEvents';
import GradesSection from './elements/GradesSection';
import NoDataFound from './elements/NoDataFound';
import type { IGetStudentGradesQueryParams } from 'contract/slices/academics/Grades.Interfaces';
import './styles/Dashboard.scss';

function Dashboard() {
  const now = new Date();
  const studentId = useSelector(selectId);
  const initialQueryParams: IGetStudentGradesQueryParams = { studentId: studentId! };
  const { data: userData, isFetching: isFetchingUserData } = useGetLoggedAccountBasicDataQuery();
  const { data: grades = [], isFetching: isFetchingGrades } = useGetStudentGradesQuery(initialQueryParams, {
    skip: !studentId,
  });
  const closestEventsData = getClosestEvents(staticEvents, now);

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
        <ClosestEvents closestEvents={closestEventsData} />
      </Box>
      <Announcements announcements={announcementsData} />
      <TodoListDrawer />
    </>
  );
}

export default Dashboard;
