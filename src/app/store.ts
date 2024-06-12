import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import apiSlice from '../features/api/apiSlice';
import authSlice from '@features/auth/authSlice';
import viewSlice from '@features/view/viewSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    viewSlice,
    authSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  // DEVELOPMENT MODE : TRUE || OTHERWISE : FALSE
  devTools: import.meta.env.VITE_NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
