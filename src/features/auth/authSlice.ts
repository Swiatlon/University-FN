/* eslint-disable */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'app/store';

interface DecodedJwt {
  token: string;
  exp?: number;
  iat?: number;
  UserInfo: {
    email: string;
    login: string;
    id: string;
  };
}

function parseJwt(token: string | null): DecodedJwt | undefined {
  if (!token) {
    return undefined;
  }

  const [, base64Url] = token.split('.');

  if (!base64Url) {
    return undefined;
  }

  const base64 = base64Url.replace('-', '+').replace('_', '/');

  return JSON.parse(window.atob(base64)) as DecodedJwt;
}

interface AuthState {
  token: string | null;
  expDate: string | null;
  user: {
    email: string | null;
    login: string | null;
    id: string | null;
  };
}

const initialState: AuthState = {
  token: null,
  expDate: null,
  user: {
    email: null,
    login: null,
    id: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: {
      prepare: ({ accessToken }: { accessToken: string }) => {
        const decoded = parseJwt(accessToken);
        const expDate = decoded?.exp ? new Date(decoded.exp * 1000).toISOString() : null;
        return { payload: { accessToken, expDate, user: decoded?.UserInfo ?? null } };
      },
      reducer: (state, action: PayloadAction<{ accessToken: string; expDate: string | null; user: any }>) => {
        const { accessToken, expDate, user } = action.payload;
        state.token = accessToken;
        state.expDate = expDate;
        if (user) {
          state.user.email = user.email;
          state.user.login = user.login;
          state.user.id = user.id;
        }
      },
    },

    logOut: state => {
      state.token = null;
      state.expDate = null;
      state.user = { email: null, login: null, id: null };
    },
  },
});

export const selectCurrentToken = (state: RootState) => state.authSlice.token;
export const selectTokenExpirationTime = (state: RootState) => state.authSlice.expDate;
export const selectUserInfo = (state: RootState) => state.authSlice.user;
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
