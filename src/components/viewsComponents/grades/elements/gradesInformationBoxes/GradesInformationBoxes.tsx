import { useSelector } from 'react-redux';
import { ErrorOutline, CheckCircleOutline, Warning, InfoOutlined, EqualizerRounded } from '@mui/icons-material';
import { Box } from '@mui/material';
import SummaryCard from 'components/shared/summaryCard/SummaryCard';
import { GradeValueEnum } from 'contract/enums/Enums';
import _ from 'lodash';
import { useGetStudentGradesQuery } from 'redux/apiSlices/academics/Grades.Api.Slice';
import { selectId } from 'redux/apiSlices/loggedAccount/LoggedAccount.Api.Slice';
import { selectAccountId } from 'redux/stateSlices/auth/Auth.State.Slice';
import type { IGrade } from 'contract/interfaces/academics/Academics';

const GradesInformationBoxes = () => {
  const accountId = useSelector(selectAccountId);
  const studentId = useSelector(selectId);

  const { data: grades } = useGetStudentGradesQuery(
    { accountId: accountId!, studentId: studentId! },
    { skip: !accountId || !studentId }
  );

  const gradesCount = grades.length;
  const highestGradesCount = _.filter(grades, { grade: GradeValueEnum.Excellent }).length;
  const underPerformingGradesCount = _.filter(grades, { grade: GradeValueEnum.Fair }).length;
  const notPassedGradesCount = _.filter(
    grades,
    grade => grade.grade === GradeValueEnum.Poor || grade.grade === null
  ).length;

  const calculateAverageGrade = (gradesList: IGrade[]): string => {
    if (gradesList.length === 0) {
      return '0.00';
    }

    const validGrades = _.map(gradesList, 'grade').filter(value => _.isNumber(value));
    const average = _.mean(validGrades);

    return average.toFixed(2);
  };

  const calculatePercentage = (count: number): string => {
    if (gradesCount === 0) {
      return '0%';
    }

    return `${Math.round((count / gradesCount) * 100)}%`;
  };

  const cards = [
    {
      id: 5,
      icon: <EqualizerRounded sx={{ color: '#2196f3', fontSize: '28px' }} />,
      title: calculateAverageGrade(grades),
      text: 'Average from your grades',
      color: '#bbdefb',
    },
    {
      id: 1,
      icon: <ErrorOutline sx={{ color: '#f70000', fontSize: '28px' }} />,
      title: calculatePercentage(notPassedGradesCount),
      text: 'Not passed subjects',
      color: '#ffc1b5',
    },
    {
      id: 6,
      icon: <CheckCircleOutline sx={{ color: '#09750d', fontSize: '28px' }} />,
      title: '100%',
      text: 'All subjects passed',
      color: '#a5e8a7',
    },
    {
      id: 2,
      icon: <CheckCircleOutline sx={{ color: '#09750d', fontSize: '28px' }} />,
      title: highestGradesCount.toString(),
      text: 'Amount of highest rate grade',
      color: '#a5e8a7',
    },
    {
      id: 3,
      icon: <Warning sx={{ color: '#ff9800', fontSize: '28px' }} />,
      title: calculatePercentage(underPerformingGradesCount),
      text: 'Underperforming grades',
      color: '#ffecb3',
    },
    {
      id: 7,
      icon: <CheckCircleOutline sx={{ color: '#09750d', fontSize: '28px' }} />,
      title: '0%',
      text: 'No underperforming grades',
      color: '#a5e8a7',
    },
    {
      id: 4,
      icon: <InfoOutlined sx={{ color: '#2196f3', fontSize: '28px' }} />,
      title: gradesCount.toString(),
      text: 'Total subjects you are enrolled in',
      color: '#bbdefb',
    },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
        gap: 2,
        width: '100%',
      }}
    >
      {cards.map(card => (
        <SummaryCard key={card.id} icon={card.icon} title={card.title} text={card.text} color={card.color} />
      ))}
    </Box>
  );
};

export default GradesInformationBoxes;
