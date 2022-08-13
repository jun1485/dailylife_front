import { createSlice, current } from "@reduxjs/toolkit";

const post = createSlice({
  name: "post",
  initialState: {
    pageNum: 1,
    myValues: [],
  },
  reducers: {
    updateItems(state, action) {
      state.myValues = action.payload;
    },
    updatePageNum(state, action) {
      state.pageNum = action.payload;
    },
  },
});

export const postActions = post.actions;

export default post;
