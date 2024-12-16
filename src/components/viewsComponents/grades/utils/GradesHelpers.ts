import { IGrade } from 'contract/interfaces/academics/Academics';
import _ from 'lodash';

export const calculateAverageGrade = (gradesList: IGrade[]): string => {
  if (gradesList.length === 0) {
    return '0.00';
  }

  const validGrades = gradesList.map(grade => grade.grade).filter(Number);

  if (validGrades.length === 0) {
    return '0.00';
  }

  const average = _.mean(validGrades);

  return average.toFixed(2);
};
