import TeacherPersonalData from 'Routes/PostAuth/PersonalData/Teacher/TeacherPersonalData';
import StudentPersonalData from 'Routes/PostAuth/PersonalData/Student/StudentPersonalData';

export const getRoleBasedComponent = (roles: string[]) => {
  if (roles.includes('Student')) {
    return <StudentPersonalData />;
  }

  if (roles.includes('Teacher')) {
    return <TeacherPersonalData />;
  }

  return null;
};
