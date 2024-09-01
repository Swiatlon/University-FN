import Login from 'routes/preAuth/login/Login';

export const loginConfig = {
  path: 'login',
  handle: {
    navigation: {
      text: 'Login',
    },
  },
  element: <Login />,
};
