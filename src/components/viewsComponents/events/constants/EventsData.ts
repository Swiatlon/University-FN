import { addDays, setHours, startOfDay } from 'date-fns';

export interface IEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description: string;
  allDay: boolean;
}

export const staticEvents: IEvent[] = [
  {
    id: '1',
    title: 'Group Study Session',
    start: setHours(startOfDay(new Date()), 10),
    end: setHours(startOfDay(new Date()), 18),
    description:
      'Join your peers for a collaborative study session to review key topics for the upcoming midterm exams.',
    allDay: false,
  },
  {
    id: '2',
    title: 'Professor’s Office Hours',
    start: addDays(startOfDay(new Date()), 1),
    end: addDays(startOfDay(new Date()), 2),
    description: 'Stop by during office hours to discuss your project and receive feedback on your progress.',
    allDay: true,
  },
  {
    id: '3',
    title: 'Research Workshop',
    start: addDays(startOfDay(new Date()), 3),
    end: addDays(startOfDay(new Date()), 4),
    description:
      'Attend this workshop to improve your research skills and learn best practices for citations and methodology.',
    allDay: true,
  },
  {
    id: '4',
    title: 'Semester Break',
    start: addDays(startOfDay(new Date()), -2),
    end: addDays(startOfDay(new Date()), 2),
    description: 'The semester break has arrived! Take some well-deserved rest before the final semester begins.',
    allDay: true,
  },
  {
    id: '5',
    title: 'Thesis Submission Deadline',
    start: addDays(startOfDay(new Date()), 14),
    end: addDays(startOfDay(new Date()), 16),
    description:
      'Reminder: Your thesis is due for submission through the university portal before 11:59 PM on this date.',
    allDay: true,
  },
];
