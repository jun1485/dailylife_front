import { createSlice } from "@reduxjs/toolkit";

const searchResult = createSlice({
  name: "searchResult",
  initialState: {
    src: "a",
    text: "b",
    underInfo: "c",
  },
  reducers: {
    updateItems(state, action) {
      state.src = action.payload.src;
      state.text = action.payload.text;
      state.underInfo = action.payload.underInfo;
    },
  },
});

export const searchedDataActions = searchResult.actions;
export default searchResult;
