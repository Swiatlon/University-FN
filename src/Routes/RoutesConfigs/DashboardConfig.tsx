import { RolesEnum } from 'Contract/Enums/Enums';
import Dashboard from 'Routes/PostAuth/Dashboard/Dashboard';

export const dashboardConfig = {
  path: 'dashboard',
  handle: {
    navigation: {
      text: 'Dashboard',
    },
    permissions: {
      availableForRoles: [RolesEnum.STUDENT],
    },
  },
  element: <Dashboard />,
};
