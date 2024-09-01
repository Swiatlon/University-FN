import { RolesEnum } from 'Contract/Enums/Enums';
import Events from 'Routes/PostAuth/Events/Events';
import Teachers from 'Routes/PostAuth/Teachers/Teachers';

export const communityConfig = {
  path: 'community',
  children: [
    {
      path: 'teachers',
      element: <Teachers />,
      handle: {
        navigation: {
          text: 'Find Teacher',
        },
        permissions: {
          availableForRoles: [RolesEnum.STUDENT],
        },
      },
    },
    {
      path: 'events',
      element: <Events />,
      handle: {
        navigation: {
          text: 'Events',
        },
        permissions: {
          availableForRoles: [RolesEnum.STUDENT],
        },
      },
    },
  ],
};
