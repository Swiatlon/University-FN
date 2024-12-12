import { EqualizerRounded, ErrorOutline, CheckCircleOutline, Warning, InfoOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import { GradeValueEnum } from 'contract/enums/Enums';
import _ from 'lodash';
import { calculatePercentage } from 'utils/decorators/Decorators';
import { calculateAverageGrade } from '../utils/GradesHelpers';
import type { IGrade } from 'contract/interfaces/academics/Academics';

interface IGradeCard {
  id: number;
  icon: JSX.Element;
  title: string;
  text: string;
  color: string;
  hideWhen?: boolean;
}

export const useGradesCards = (grades: IGrade[]): IGradeCard[] => {
  const {
    palette: {
      customColors: { deepRed, orange, blue, darkGreen },
    },
  } = useTheme();
  const gradesCount = grades.length;
  const highestGradesCount = _.filter(grades, { grade: GradeValueEnum.Excellent }).length;
  const underPerformingGradesCount = _.filter(grades, { grade: GradeValueEnum.Fair }).length;
  const notPassedGradesCount = _.filter(grades, { grade: GradeValueEnum.Poor }).length;

  return [
    {
      id: 5,
      icon: <EqualizerRounded sx={{ color: blue, fontSize: '24px' }} />,
      title: calculateAverageGrade(grades),
      text: 'Average from your grades',
      color: '#bbdefb',
    },
    {
      id: 1,
      icon: <ErrorOutline sx={{ color: deepRed, fontSize: '24px' }} />,
      title: calculatePercentage(notPassedGradesCount, gradesCount),
      text: 'Not passed subjects',
      color: '#ffc1b5',
      hideWhen: notPassedGradesCount === 0,
    },
    {
      id: 6,
      icon: <CheckCircleOutline sx={{ color: darkGreen, fontSize: '24px' }} />,
      title: '100%',
      text: 'All subjects passed',
      color: '#a5e8a7',
      hideWhen: notPassedGradesCount > 0,
    },
    {
      id: 2,
      icon: <CheckCircleOutline sx={{ color: darkGreen, fontSize: '24px' }} />,
      title: highestGradesCount.toString(),
      text: 'Amount of highest rate grade',
      color: '#a5e8a7',
    },
    {
      id: 3,
      icon: <Warning sx={{ color: orange, fontSize: '24px' }} />,
      title: calculatePercentage(underPerformingGradesCount, gradesCount),
      text: 'Underperforming grades',
      color: '#ffecb3',
      hideWhen: underPerformingGradesCount === 0,
    },
    {
      id: 7,
      icon: <CheckCircleOutline sx={{ color: darkGreen, fontSize: '24px' }} />,
      title: '0%',
      text: 'No underperforming grades',
      color: '#a5e8a7',
      hideWhen: underPerformingGradesCount > 0,
    },
    {
      id: 4,
      icon: <InfoOutlined sx={{ color: blue, fontSize: '24px' }} />,
      title: gradesCount.toString(),
      text: 'Total subjects you are enrolled in',
      color: '#bbdefb',
    },
  ].filter(card => !card.hideWhen);
};
