import { EqualizerRounded, ErrorOutline, CheckCircleOutline, Warning, InfoOutlined } from '@mui/icons-material';
import { GradeValueEnum } from 'contract/enums/Enums';
import _ from 'lodash';
import { calculateAverageGrade, calculatePercentage } from '../utils/Helpers';
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
  const gradesCount = grades.length;
  const highestGradesCount = _.filter(grades, { grade: GradeValueEnum.Excellent }).length;
  const underPerformingGradesCount = _.filter(grades, { grade: GradeValueEnum.Fair }).length;
  const notPassedGradesCount = _.filter(grades, { grade: GradeValueEnum.Poor }).length;

  return [
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
      title: calculatePercentage(notPassedGradesCount, gradesCount),
      text: 'Not passed subjects',
      color: '#ffc1b5',
      hideWhen: notPassedGradesCount === 0,
    },
    {
      id: 6,
      icon: <CheckCircleOutline sx={{ color: '#09750d', fontSize: '28px' }} />,
      title: '100%',
      text: 'All subjects passed',
      color: '#a5e8a7',
      hideWhen: notPassedGradesCount > 0,
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
      title: calculatePercentage(underPerformingGradesCount, gradesCount),
      text: 'Underperforming grades',
      color: '#ffecb3',
      hideWhen: underPerformingGradesCount === 0,
    },
    {
      id: 7,
      icon: <CheckCircleOutline sx={{ color: '#09750d', fontSize: '28px' }} />,
      title: '0%',
      text: 'No underperforming grades',
      color: '#a5e8a7',
      hideWhen: underPerformingGradesCount > 0,
    },
    {
      id: 4,
      icon: <InfoOutlined sx={{ color: '#2196f3', fontSize: '28px' }} />,
      title: gradesCount.toString(),
      text: 'Total subjects you are enrolled in',
      color: '#bbdefb',
    },
  ].filter(card => !card.hideWhen);
};
