import Logout from 'Routes/PostAuth/Logout/Logout';

export const logoutConfig = {
  path: 'logout',
  handle: {
    navigation: {
      text: 'Logout',
    },
  },
  element: <Logout />,
};
