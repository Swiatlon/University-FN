import { RolesEnum } from 'contract/enums/Enums';
import Courses from 'routes/postAuth/courses/Courses';

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
