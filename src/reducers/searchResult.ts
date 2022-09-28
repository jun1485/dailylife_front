import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchResult = createSlice({
  name: 'searchResult',
  initialState: {
    result: '',
  },
  reducers: {
    updateSearchedKeyword: (state, action: PayloadAction<string>) => {
      state.result = action.payload;
    },
  },
});

export const { updateSearchedKeyword } = searchResult.actions;
export default searchResult;
