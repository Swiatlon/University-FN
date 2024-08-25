import Login from 'Routes/PreAuth/Login/Login';

export const loginConfig = {
  path: 'login',
  handle: {
    navigation: {
      text: 'Login',
    },
  },
  element: <Login />,
};
