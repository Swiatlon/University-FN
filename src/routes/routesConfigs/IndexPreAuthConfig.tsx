import Login from 'routes/preAuth/login/Login';

export const indexPreAuthConfig = {
  index: true,
  handle: {
    navigation: {
      text: 'Login',
    },
  },
  element: <Login />,
};
