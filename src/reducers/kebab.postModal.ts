import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const kebabModal = createSlice({
  name: 'kebabModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    updateModalStatus: (state, action: PayloadAction<boolean>): void => {
      state.isOpen = action.payload;
    },
  },
});

export const { updateModalStatus } = kebabModal.actions;

export default kebabModal;
