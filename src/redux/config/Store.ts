import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from 'redux/stateSlices/auth/Auth.State.Slice';
import viewSlice from 'redux/stateSlices/view/View.State.Slice';
import Api from './Api';

export const setupStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      [Api.reducerPath]: Api.reducer,
      viewSlice,
      authSlice,
    },
    preloadedState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(Api.middleware),
    devTools: import.meta.env.VITE_NODE_ENV !== 'production',
  });
};

export type RootStateType = ReturnType<typeof setupStore>['getState'];
export type AppDispatchType = ReturnType<typeof setupStore>['dispatch'];
export type AppStoreType = ReturnType<typeof setupStore>;

setupListeners(setupStore().dispatch);
