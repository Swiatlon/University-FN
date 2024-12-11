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
    start: new Date(new Date().setHours(10, 0, 0, 0)).toISOString(),
    end: new Date(new Date().setHours(18, 0, 0, 0)).toISOString(),
    description: 'Review topics for the upcoming midterm exam.',
    allDay: false,
  },
  {
    id: '2',
    title: 'Professor’s Office Hours',
    start: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
    end: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(),
    description: 'Meet with the professor to discuss the project outline.',
    allDay: true,
  },
  {
    id: '3',
    title: 'Research Workshop',
    start: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString(),
    end: new Date(new Date().setDate(new Date().getDate() + 4)).toISOString(),
    description: 'A workshop on improving research methodology and citation practices.',
    allDay: true,
  },
  {
    id: '4',
    title: 'Semester Break',
    start: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
    end: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(),
    description: 'A short break before the final semester begins.',
    allDay: true,
  },
  {
    id: '5',
    title: 'Thesis Submission Deadline',
    start: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString(),
    end: new Date(new Date().setDate(new Date().getDate() + 16)).toISOString(),
    description: 'Submit your thesis through the university portal before 11:59 PM.',
    allDay: true,
  },
];
