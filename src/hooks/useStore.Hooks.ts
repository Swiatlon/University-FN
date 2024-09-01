import { useDispatch, useSelector, type TypedUseSelectorHook, useStore } from 'react-redux';
import type { AppDispatchType, RootStateType } from '../Redux/Config/Store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`!!!!
export const useTypedDispatch: () => AppDispatchType = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useTypedAppStore = () => useStore<RootStateType>();
