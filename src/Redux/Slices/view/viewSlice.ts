import { createSlice } from '@reduxjs/toolkit';

interface IViewSlice {
  isDrawerOpen: boolean;
}

const initialState = {
  isDrawerOpen: true,
} as IViewSlice;

const viewSlice = createSlice({
  name: 'viewSlice',
  initialState,
  reducers: {
    toggleDrawer: state => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
  selectors: {
    selectIsDrawerOpen: state => state.isDrawerOpen,
  },
});

export const { toggleDrawer } = viewSlice.actions;
export const { selectIsDrawerOpen } = viewSlice.selectors;

export default viewSlice.reducer;
