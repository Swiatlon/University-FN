import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const isDesktop = () => typeof window !== 'undefined' && window.innerWidth > 910;

interface IViewSlice {
  isDrawerOpen: boolean;
}

const initialState: IViewSlice = {
  isDrawerOpen: isDesktop(),
};

const viewSlice = createSlice({
  name: 'viewSlice',
  initialState,
  reducers: {
    toggleDrawer: state => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
    setDrawerState: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
  },
  selectors: {
    selectIsDrawerOpen: state => state.isDrawerOpen,
  },
});

export const { toggleDrawer, setDrawerState } = viewSlice.actions;
export const { selectIsDrawerOpen } = viewSlice.selectors;

export default viewSlice.reducer;
