import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { parseJwt } from 'utils/slices/JWT.Utils';
import type { RolesEnum } from 'contract/enums/Enums';
import type { RootStateType } from 'redux/config/Store';

interface IAuthState {
  token: string | null;
  accountId: string | null;
  expDate: string | null;
  userRoles: RolesEnum[] | [];
}

const initialState: IAuthState = {
  token: null,
  accountId: null,
  expDate: null,
  userRoles: [],
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setCredentials: {
      prepare: ({ accessToken }: { accessToken: string }) => {
        const decoded = parseJwt(accessToken);
        const expDate = decoded?.exp ? new Date(decoded.exp * 1000).toISOString() : null;
        const roles = decoded?.roles ?? [];
        const accountId = decoded?.accountId;

        return { payload: { accessToken, expDate, roles, accountId } };
      },

      reducer: (
        state,
        action: PayloadAction<{ accessToken: string; expDate: string | null; roles: RolesEnum[] | [] }>
      ) => {
        const { accessToken, expDate, roles } = action.payload;

        state.token = accessToken;
        state.expDate = expDate;
        state.userRoles = roles;
      },
    },

    logOut: state => {
      state.token = null;
      state.expDate = null;
      state.userRoles = [];
    },
  },
});

export const selectCurrentToken = (state: RootStateType) => state.authSlice.token;
export const selectTokenExpirationTime = (state: RootStateType) => state.authSlice.expDate;
export const selectUserRoles = (state: RootStateType) => state.authSlice.userRoles;

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
