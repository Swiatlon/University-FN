import { RolesEnum } from 'contract/enums/Enums';
import Dashboard from 'routes/postAuth/dashboard/Dashboard';

export const dashboardConfig = {
  path: '*',
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
