import Logout from 'components/shared/navigation/elements/logout/Logout';

export const logoutConfig = {
  path: 'logout',
  handle: {
    navigation: {
      text: 'Logout',
    },
  },
  element: <Logout />,
};
