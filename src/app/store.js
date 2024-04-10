import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import apiSlice from '../features/api/apiSlice';
import authSlice from '@features/auth/authSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    authSlice: authSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: import.meta.env.VITE_NODE_ENV !== 'production', // DEVELOPMENT MODE : TRUE || OTHERWISE : FALSE
});

setupListeners(store.dispatch);

export default store;
