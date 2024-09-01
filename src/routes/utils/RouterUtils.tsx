import { RolesEnum } from 'Contract/Enums/Enums';
import StudentPersonalData from 'Routes/PostAuth/PersonalData/Student/StudentPersonalData';
import TeacherPersonalData from 'Routes/PostAuth/PersonalData/Teacher/TeacherPersonalData';

export const getRoleBasedComponent = (roles: string[]) => {
  if (roles.includes(RolesEnum.STUDENT)) {
    return <StudentPersonalData />;
  }

  if (roles.includes(RolesEnum.TEACHER)) {
    return <TeacherPersonalData />;
  }

  return null;
};
