import Dashboard from 'Routes/PostAuth/Dashboard/Dashboard';

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
