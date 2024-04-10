import { createSlice } from '@reduxjs/toolkit';

function parseJwt(token) {
  if (!token) {
    return;
  }

  const base64Url = token.split('.')[1];

  const base64 = base64Url.replace('-', '+').replace('_', '/');

  return JSON.parse(window.atob(base64));
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    expDate: null,
  },
  reducers: {
    setCredentials: {
      prepare: ({ accessToken }) => {
        const decoded = parseJwt(accessToken);
        const expDate = decoded.exp ? new Date(decoded.exp * 1000).toISOString() : null;
        return { payload: { accessToken, expDate } };
      },
      reducer: (state, action) => {
        const { accessToken, expDate } = action.payload;
        state.token = accessToken;
        state.expDate = expDate;
      },
    },

    logOut: state => {
      state.token = null;
      state.expDate = null;
    },
  },
});

export const selectCurrentToken = state => state.authSlice.token;
export const selectTokenExpirationTime = state => state.authSlice.expDate;
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
