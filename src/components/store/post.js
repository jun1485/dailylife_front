import { createSlice, current } from "@reduxjs/toolkit";

const post = createSlice({
  name: "post",
  initialState: {
    myValues: [],
  },
  reducers: {
    updateItems(state, action) {
      state.myValues = action.payload;
    },
  },
});

export const postActions = post.actions;

export default post;
