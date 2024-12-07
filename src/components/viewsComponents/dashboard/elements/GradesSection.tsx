import { useNavigate } from 'react-router-dom';
import { Typography, Paper, Box, Button } from '@mui/material';
import { calculateAverageGrade } from 'components/viewsComponents/grades/elements/gradesInformationBoxes/GradesInformationBoxes';
import _ from 'lodash';
import GradesDonutChart from './GradesDonutChart';
import type { IGrade } from 'contract/interfaces/academics/Academics';
import type { IGetLoggedAccountBasicDataTransformedReponse } from 'contract/slices/loggedAccount/LoggedAccount';

interface GradesSectionProps {
  grades?: IGrade[];
  userData: IGetLoggedAccountBasicDataTransformedReponse;
}

const GradesSection: React.FC<GradesSectionProps> = ({ grades, userData }) => {
  const navigate = useNavigate();

  const averageGrade = calculateAverageGrade(grades ?? []);
  const gradeGroups = _.groupBy(grades, 'grade');
  const groupedData = [
    { grade: '2', count: gradeGroups[2]?.length ?? 0, fill: '#c40101' },
    { grade: '3', count: gradeGroups[3]?.length ?? 0, fill: '#ff9800' },
    { grade: '4', count: gradeGroups[4]?.length ?? 0, fill: '#2196f3' },
    { grade: '5', count: gradeGroups[5]?.length ?? 0, fill: '#09750d' },
  ];

  return (
    <Paper
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        p: 4,
        width: 'fit-content',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          flex: 1,
          minWidth: '180px',
        }}
      >
        <Typography variant="h5" color="#524e61" fontWeight="bold">
          Hi, <span>{`${userData.name} ${userData.surname}!`}</span>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Check your performance stats <br /> to make sure you are on track <br /> with your academic goals!
        </Typography>
        <Button
          variant="text"
          sx={{ whiteSpace: 'nowrap', maxWidth: '100px' }}
          onClick={() => {
            navigate('/postAuth/academics/grades');
          }}
        >
          See all Grades
        </Button>
      </Box>
      <GradesDonutChart groupedData={groupedData} averageGrade={averageGrade} />
    </Paper>
  );
};

export default GradesSection;
