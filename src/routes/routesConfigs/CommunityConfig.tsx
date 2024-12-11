import Events from 'components/viewsComponents/events/Events';
import Teachers from 'components/viewsComponents/teachers/Teachers';
import { RolesEnum } from 'contract/enums/Enums';

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
