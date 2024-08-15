import { RolesEnum } from 'Contract/Enums/Enums';
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
          notAvailableForRoles: [RolesEnum.EXTERNAL_PARTICIPANT, RolesEnum.COMPANY],
        },
      },
    },
  ],
};
