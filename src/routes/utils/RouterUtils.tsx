import { RolesEnum } from 'contract/enums/Enums';
import StudentPersonalData from 'routes/postAuth/personalData/student/StudentPersonalData';
import TeacherPersonalData from 'routes/postAuth/personalData/teacher/TeacherPersonalData';

export const getRoleBasedComponent = (roles: string[]) => {
  if (roles.includes(RolesEnum.STUDENT)) {
    return <StudentPersonalData />;
  }

  if (roles.includes(RolesEnum.TEACHER)) {
    return <TeacherPersonalData />;
  }

  return null;
};
