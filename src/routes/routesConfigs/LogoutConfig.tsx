import Logout from 'routes/postAuth/logout/Logout';

export const logoutConfig = {
  path: 'logout',
  handle: {
    navigation: {
      text: 'Logout',
    },
  },
  element: <Logout />,
};
