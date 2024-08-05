import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import Api from './Api';
import authSlice from 'Redux/Slices/auth/authSlice';
import viewSlice from 'Redux/Slices/view/viewSlice';

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    viewSlice,
    authSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(Api.middleware),
  // DEVELOPMENT MODE : TRUE || OTHERWISE : FALSE
  devTools: import.meta.env.VITE_NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
