import { addDays, setHours, startOfDay, format } from 'date-fns';

export interface IEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  description: string;
  allDay: boolean;
}

const formatDate = (date: Date): string => format(date, "yyyy-MM-dd'T'HH:mm");

export const staticEvents: IEvent[] = [
  {
    id: '1',
    title: 'Group Study Session',
    start: formatDate(setHours(startOfDay(new Date()), 10)),
    end: formatDate(setHours(startOfDay(new Date()), 18)),
    description:
      'Join your peers for a collaborative study session to review key topics for the upcoming midterm exams.',
    allDay: false,
  },
  {
    id: '2',
    title: 'Professor’s Office Hours',
    start: formatDate(addDays(startOfDay(new Date()), 1)),
    end: formatDate(addDays(startOfDay(new Date()), 2)),
    description: 'Stop by during office hours to discuss your project and receive feedback on your progress.',
    allDay: true,
  },
  {
    id: '3',
    title: 'Research Workshop',
    start: formatDate(addDays(startOfDay(new Date()), 3)),
    end: formatDate(addDays(startOfDay(new Date()), 4)),
    description:
      'Attend this workshop to improve your research skills and learn best practices for citations and methodology.',
    allDay: true,
  },
  {
    id: '4',
    title: 'Semester Break',
    start: formatDate(addDays(startOfDay(new Date()), -2)),
    end: formatDate(addDays(startOfDay(new Date()), 2)),
    description: 'The semester break has arrived! Take some well-deserved rest before the final semester begins.',
    allDay: true,
  },
  {
    id: '5',
    title: 'Thesis Submission Deadline',
    start: formatDate(addDays(startOfDay(new Date()), 14)),
    end: formatDate(addDays(startOfDay(new Date()), 16)),
    description:
      'Reminder: Your thesis is due for submission through the university portal before 11:59 PM on this date.',
    allDay: true,
  },
];
