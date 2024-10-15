import Dashboard from 'routes/postAuth/dashboard/Dashboard';

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
