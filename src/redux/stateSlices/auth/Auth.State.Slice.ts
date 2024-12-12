import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { parseJwt } from 'redux/utils/JWT/JWT.Utils';
import type { RolesEnum } from 'contract/enums/Enums';

export interface IAuthState {
  token: string | null;
  accountId: number | null;
  expDate: string | null;
  userRoles: RolesEnum[];
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
        localStorage.setItem('accessToken', accessToken);
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
      localStorage.removeItem('accessToken');
      state.token = null;
      state.expDate = null;
      state.userRoles = [];
      state.accountId = null;
    },
  },
  selectors: {
    selectCurrentToken: state => state.token,
    selectTokenExpirationTime: state => state.expDate,
    selectUserRoles: state => state.userRoles,
    selectAccountId: state => state.accountId,
  },
});

export const { selectCurrentToken, selectTokenExpirationTime, selectUserRoles, selectAccountId } = authSlice.selectors;
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
