import { RolesEnum } from 'contract/enums/Enums';
import StudentPersonalData from 'routes/postAuth/personalData/student/StudentPersonalData';

export const profileConfig = {
  path: 'profile',
  handle: {
    navigation: {
      text: 'Profile',
    },
    permissions: {
      availableForRoles: [RolesEnum.STUDENT],
    },
  },
  children: [
    {
      path: 'personal-data',
      element: <StudentPersonalData />,
      handle: {
        navigation: {
          text: 'Personal Data',
        },
        availableForRoles: [RolesEnum.STUDENT],
      },
    },
  ],
};
