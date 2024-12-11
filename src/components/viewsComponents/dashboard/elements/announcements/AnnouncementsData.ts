export interface IAnnouncement {
  id: number;
  title: string;
  body: string;
  date: string;
}

export const announcementsData: IAnnouncement[] = [
  {
    id: 1,
    title: 'Welcome to the Semester!',
    body: 'We hope you have a great start to the semester. Remember to check your schedules and prepare for the first week of classes.',
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Library System Maintenance',
    body: 'The library system will be undergoing maintenance on January 20th from 8 PM to 12 AM. Please plan accordingly.',
    date: '2024-01-18',
  },
  {
    id: 3,
    title: 'Course Enrollment Deadline',
    body: 'The last date to add or drop courses for this semester is January 25th. Make sure to finalize your schedules.',
    date: '2024-01-22',
  },
];
