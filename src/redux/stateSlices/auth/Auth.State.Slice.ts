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
        const userRoles = decoded?.roles ?? [];
        const accountId = decoded?.accountId ?? null;

        return { payload: { token: accessToken, expDate, userRoles, accountId } };
      },

      reducer: (state, action: PayloadAction<IAuthState>) => {
        const { token, expDate, userRoles, accountId } = action.payload;

        state.token = token;
        state.expDate = expDate;
        state.userRoles = userRoles;
        state.accountId = accountId;
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
export const selectAccountId = (state: RootStateType) => state.authSlice.accountId;

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
