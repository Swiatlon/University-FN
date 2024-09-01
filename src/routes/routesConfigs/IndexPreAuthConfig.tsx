import Login from 'Routes/PreAuth/Login/Login';

export const indexPreAuthConfig = {
  index: true,
  handle: {
    navigation: {
      text: 'Login',
    },
  },
  element: <Login />,
};
