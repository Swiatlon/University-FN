import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from 'Redux/StateSlices/Auth/Auth.State.Slice';
import viewSlice from 'Redux/StateSlices/View/View.State.Slice';
import Api from './Api';

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    viewSlice,
    authSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(Api.middleware),
  devTools: import.meta.env.VITE_NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
