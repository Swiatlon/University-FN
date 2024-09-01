import { RolesEnum } from 'Contract/Enums/Enums';
import Courses from 'Routes/PostAuth/Courses/Courses';

export const academicsConfig = {
  path: 'Academics',
  children: [
    {
      path: 'Courses',
      element: <Courses />,
      handle: {
        navigation: {
          text: 'Courses',
        },
        permissions: {
          availableForRoles: [RolesEnum.STUDENT],
        },
      },
    },
  ],
};
