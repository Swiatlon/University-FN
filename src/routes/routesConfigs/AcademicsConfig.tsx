import Courses from 'components/viewsComponents/courses/Courses';
import Grades from 'components/viewsComponents/grades/Grades';
import { RolesEnum } from 'contract/enums/Enums';

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
    {
      path: 'Grades',
      element: <Grades />,
      handle: {
        navigation: {
          text: 'Grades',
        },
        permissions: {
          availableForRoles: [RolesEnum.STUDENT],
        },
      },
    },
  ],
};
