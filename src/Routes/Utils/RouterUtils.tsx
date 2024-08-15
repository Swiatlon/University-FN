import StudentPersonalData from 'Routes/PostAuth/PersonalData/Student/StudentPersonalData';
import TeacherPersonalData from 'Routes/PostAuth/PersonalData/Teacher/TeacherPersonalData';

export const getRoleBasedComponent = (roles: string[]) => {
  if (roles.includes('Student')) {
    return <StudentPersonalData />;
  }

  if (roles.includes('Teacher')) {
    return <TeacherPersonalData />;
  }

  return null;
};
