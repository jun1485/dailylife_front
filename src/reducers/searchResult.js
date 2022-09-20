import { createSlice } from '@reduxjs/toolkit';

const searchResult = createSlice({
  name: 'searchResult',
  initialState: [],
  reducers: {
    bringItems: (action) => action.payload,
  },
});

export const searchedDataActions = searchResult.actions;
export default searchResult;
