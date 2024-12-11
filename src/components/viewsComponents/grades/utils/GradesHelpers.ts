import { IEvent } from 'components/viewsComponents/events/constants/EventsData';
import { IGrade } from 'contract/interfaces/academics/Academics';
import { isAfter, isBefore, parseISO } from 'date-fns';
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

export const calculatePercentage = (count: number, gradesCount: number): string => {
  if (gradesCount === 0) {
    return '0%';
  }

  return `${Math.round((count / gradesCount) * 100)}%`;
};

export const getClosestEvents = (events: IEvent[], now: Date = new Date()): IEvent[] => {
  return _(events)
    .filter(event => {
      const startDate = parseISO(event.start);
      const endDate = parseISO(event.end);

      return isAfter(startDate, now) || (isBefore(startDate, now) && isAfter(endDate, now));
    })
    .orderBy(event => parseISO(event.start).getTime())
    .take(3)
    .value();
};
