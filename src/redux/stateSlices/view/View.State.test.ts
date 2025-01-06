import { expect } from '@jest/globals';
import reducer, { selectIsDrawerOpen, setDrawerState, toggleDrawer } from '../view/View.State.Slice';

describe('viewSlice tests', () => {
  test('should return the initial state', () => {
    const isDrawerInitiallyOpen = typeof window !== 'undefined' && window.innerWidth > 910;

    expect(reducer(undefined, { type: 'unknown' })).toEqual({
      isDrawerOpen: isDrawerInitiallyOpen,
    });
  });

  test('should toggle the drawer state', () => {
    const previousState = { isDrawerOpen: false };

    const action = toggleDrawer();
    const newValue = reducer(previousState, action);
    expect(newValue).toEqual({
      isDrawerOpen: true,
    });

    const secondNewValue = reducer(newValue, action);
    expect(secondNewValue).toEqual({
      isDrawerOpen: false,
    });
  });

  test('should set the drawer state explicitly', () => {
    const previousState = { isDrawerOpen: false };
    const action = (newVal: boolean) => setDrawerState(newVal);

    const newValue = reducer(previousState, action(true));
    expect(newValue).toEqual({
      isDrawerOpen: true,
    });

    const secondNewValue = reducer(newValue, action(false));
    expect(secondNewValue).toEqual({
      isDrawerOpen: false,
    });
  });

  test('should correctly select the isDrawerOpen state', () => {
    const state = { isDrawerOpen: true };
    const selectorBasedOnState = selectIsDrawerOpen({ viewSlice: state });
    expect(selectorBasedOnState).toBe(true);

    const anotherState = { isDrawerOpen: false };
    const selectorBasedAnotherState = selectIsDrawerOpen({ viewSlice: anotherState });
    expect(selectorBasedAnotherState).toBe(false);
  });
});
