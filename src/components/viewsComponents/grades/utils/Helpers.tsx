import { IGrade } from 'contract/interfaces/academics/Academics';
import _ from 'lodash';

export const calculateAverageGrade = (gradesList: IGrade[]): string => {
  if (gradesList.length === 0) {
    return '0.00';
  }

  const validGrades = _.map(gradesList, 'grade').filter(Number);
  const average = _.mean(validGrades);

  return average.toFixed(2);
};

export const calculatePercentage = (count: number, gradesCount: number): string => {
  if (gradesCount === 0) {
    return '0%';
  }

  return `${Math.round((count / gradesCount) * 100)}%`;
};
