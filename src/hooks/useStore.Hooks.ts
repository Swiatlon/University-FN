import { useDispatch, useSelector, type TypedUseSelectorHook, useStore } from 'react-redux';
import type { AppDispatchType, RootStateType } from '../redux/config/Store';

export const useTypedDispatch: () => AppDispatchType = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useTypedAppStore = () => useStore<RootStateType>();
