import { createSlice } from '@reduxjs/toolkit';

const post = createSlice({
  name: 'post',
  initialState: {
    pageNum: 1,
    // isOpenWritePostModal: false,
    myValues: [],
  },
  reducers: {
    updateItems: (action) => ({ myValues: action.payload }),
    updatePageNum: (action) => ({ pageNum: action.payload }),
  },
});

export const postActions = post.actions;

export default post;
