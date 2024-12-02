import Dashboard from 'components/viewsComponents/dashboard/Dashboard';

export const indexPostAuthConfig = {
  index: true,
  path: '*',
  handle: {
    navigation: {
      text: 'Dashboard',
    },
  },
  element: <Dashboard />,
};
