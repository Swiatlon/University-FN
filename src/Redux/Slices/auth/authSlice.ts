/* eslint-disable */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'Redux/Store';

interface DecodedJwt {
  token: string;
  exp?: number;
  iat?: number;
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
}

const initialState: AuthState = {
  token: null,
  expDate: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setCredentials: {
      prepare: ({ accessToken }: { accessToken: string }) => {
        const decoded = parseJwt(accessToken);
        const expDate = decoded?.exp ? new Date(decoded.exp * 1000).toISOString() : null;
        return { payload: { accessToken, expDate } };
      },

      reducer: (state, action: PayloadAction<{ accessToken: string; expDate: string | null; user: any }>) => {
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

export const selectCurrentToken = (state: RootState) => state.authSlice.token;
export const selectTokenExpirationTime = (state: RootState) => state.authSlice.expDate;
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
