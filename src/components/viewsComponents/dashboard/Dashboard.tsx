import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Typography, useMediaQuery } from '@mui/material';
import CenteredLoader from 'components/shared/centeredLoader/CenteredLoader';
import TodoListDrawer from 'components/shared/todoListDrawer/TodoListDrawer';
import _ from 'lodash';
import { useGetStudentGradesQuery } from 'redux/apiSlices/academics/Grades.Api.Slice';
import { selectId, useGetLoggedAccountBasicDataQuery } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import { calculateAverageGrade } from '../grades/elements/gradesInformationBoxes/GradesInformationBoxes';
import GradesDonutChart from './elements/GradesDonutChart';
import type { IGetStudentGradesQueryParams } from 'contract/slices/academics/Grades.Interfaces';
import './Dashboard.scss';

function Dashboard() {
  const navigate = useNavigate();
  const studentId = useSelector(selectId);
  const isMobile = useMediaQuery('(max-width: 500px)');
  const maxDrawerWidth = isMobile ? 280 : 450;
  const { data } = useGetLoggedAccountBasicDataQuery();
  const initialQueryParams: IGetStudentGradesQueryParams = { studentId: studentId! };
  const { data: grades, isFetching } = useGetStudentGradesQuery(initialQueryParams, { skip: !studentId });

  if (isFetching || !data) {
    return <CenteredLoader />;
  }

  const averageGrade = calculateAverageGrade(grades ?? []);
  const gradeGroups = _.groupBy(grades, 'grade');
  const groupedData = [
    { grade: '2', count: gradeGroups[2]?.length ?? 0, fill: '#c40101' },
    { grade: '3', count: gradeGroups[3]?.length ?? 0, fill: '#ff9800' },
    { grade: '4', count: gradeGroups[4]?.length ?? 0, fill: '#2196f3' },
    { grade: '5', count: gradeGroups[5]?.length ?? 0, fill: '#09750d' },
  ];

  return (
    <Box>
      <Paper
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          alignContent: 'center',
          p: 4,
          width: 'fit-content',

          '@media (max-width: 650px)': {
            px: 2,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 3,
            flex: 1,
            minWidth: '180px',
          }}
        >
          <Typography variant="h4" color="#524e61" fontWeight="bold">
            Hi, <span style={{ whiteSpace: 'nowrap' }}> {`${data.name} ${data.surname}!`}</span>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Check your performance stats <br /> to make sure you are on track <br /> with your academic goals!
          </Typography>
          <Button
            variant="text"
            sx={{ maxWidth: '114px', p: 0 }}
            onClick={() => {
              navigate('/postAuth/academics/grades');
            }}
          >
            See all Grades
          </Button>
        </Box>
        <GradesDonutChart groupedData={groupedData} averageGrade={averageGrade} />
      </Paper>
      <Typography variant="h5"> Due missing data, content will cooming soon!</Typography>
      <TodoListDrawer maxDrawerWidth={maxDrawerWidth} />
    </Box>
  );
}

export default Dashboard;
