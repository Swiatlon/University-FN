import { createSlice } from '@reduxjs/toolkit';

interface IViewSlice {
  isDrawerOpen: boolean;
}

const initialState: IViewSlice = {
  isDrawerOpen: true,
};

const viewSlice = createSlice({
  name: 'viewSlice',
  initialState,
  reducers: {
    toggleDrawer: state => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
  selectors: {
    selectIsDrawerOpen: state => {
      return state.isDrawerOpen;
    },
  },
});

export const { toggleDrawer } = viewSlice.actions;
export const { selectIsDrawerOpen } = viewSlice.selectors;

export default viewSlice.reducer;
