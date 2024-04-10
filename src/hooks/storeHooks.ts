import { useDispatch, useSelector, type TypedUseSelectorHook, useStore } from 'react-redux';
import type { AppDispatch, RootState } from 'app/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`!!!!
export const useTypedDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedAppStore = () => useStore<RootState>();
