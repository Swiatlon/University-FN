import Dashboard from 'components/viewsComponents/dashboard/Dashboard';
import { RolesEnum } from 'contract/enums/Enums';

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
