import { RolesEnum } from 'contract/enums/Enums';
import Events from 'routes/postAuth/events/Events';
import Teachers from 'routes/postAuth/teachers/Teachers';

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
