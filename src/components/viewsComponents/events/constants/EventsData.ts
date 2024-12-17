import { addDays, setHours, setMinutes } from 'date-fns';

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
    start: setMinutes(setHours(addDays(new Date(), 4), 12), 0),
    end: setMinutes(setHours(addDays(new Date(), 4), 18), 0),
    description:
      'Join your peers for a collaborative study session to review key topics for the upcoming midterm exams.',
    allDay: false,
  },
  {
    id: '2',
    title: 'Professor’s Office Hours',
    start: setMinutes(setHours(addDays(new Date(), 2), 11), 0),
    end: setMinutes(setHours(addDays(new Date(), 2), 13), 0),
    description: 'Stop by during office hours to discuss your project and receive feedback on your progress.',
    allDay: false,
  },
  {
    id: '3',
    title: 'Research Workshop',
    start: setMinutes(setHours(addDays(new Date(), 3), 14), 0),
    end: setMinutes(setHours(addDays(new Date(), 3), 16), 0),
    description:
      'Attend this workshop to improve your research skills and learn best practices for citations and methodology.',
    allDay: false,
  },
  {
    id: '4',
    title: 'Semester Break',
    start: setMinutes(setHours(addDays(new Date(), -2), 12), 0),
    end: setMinutes(setHours(addDays(new Date(), 2), 12), 0),
    description: 'The semester break has arrived! Take some well-deserved rest before the final semester begins.',
    allDay: true,
  },
  {
    id: '5',
    title: 'Thesis Submission Deadline',
    start: setMinutes(setHours(addDays(new Date(), 14), 22), 0),
    end: setMinutes(setHours(addDays(new Date(), 14), 23), 59),
    description:
      'Reminder: Your thesis is due for submission through the university portal before 11:59 PM on this date.',
    allDay: false,
  },
];
