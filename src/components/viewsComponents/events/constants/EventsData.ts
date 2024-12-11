import { addDays, setHours, startOfDay } from 'date-fns';

export interface Event {
  id: string;
  title: string;
  start: string;
  end: string;
  description: string;
  allDay: boolean;
}

export const staticEvents: Event[] = [
  {
    id: '1',
    title: 'Group Study Session',
    start: setHours(startOfDay(new Date()), 10).toISOString(),
    end: setHours(startOfDay(new Date()), 18).toISOString(),
    description: 'Review topics for the upcoming midterm exam.',
    allDay: false,
  },
  {
    id: '2',
    title: 'Professor’s Office Hours',
    start: startOfDay(addDays(new Date(), 1)).toISOString(),
    end: startOfDay(addDays(new Date(), 2)).toISOString(),
    description: 'Meet with the professor to discuss the project outline.',
    allDay: true,
  },
  {
    id: '3',
    title: 'Research Workshop',
    start: startOfDay(addDays(new Date(), 3)).toISOString(),
    end: startOfDay(addDays(new Date(), 4)).toISOString(),
    description: 'A workshop on improving research methodology and citation practices.',
    allDay: true,
  },
  {
    id: '4',
    title: 'Semester Break',
    start: startOfDay(addDays(new Date(), -2)).toISOString(),
    end: startOfDay(addDays(new Date(), 2)).toISOString(),
    description: 'A short break before the final semester begins.',
    allDay: true,
  },
  {
    id: '5',
    title: 'Thesis Submission Deadline',
    start: startOfDay(addDays(new Date(), 14)).toISOString(),
    end: startOfDay(addDays(new Date(), 16)).toISOString(),
    description: 'Submit your thesis through the university portal before 11:59 PM.',
    allDay: true,
  },
];
