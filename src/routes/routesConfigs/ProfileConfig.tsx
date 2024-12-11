import StudentPersonalData from 'components/viewsComponents/personalData/StudentPersonalData';
import { RolesEnum } from 'contract/enums/Enums';

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
