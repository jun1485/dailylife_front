import { createSlice } from '@reduxjs/toolkit';

const comment = createSlice({
  name: 'comment',
  initialState: {
    replyList: [],
    reReplyFlag: [],
  },
  reducers: {
    updateReplyList: (state, action) => ({
      replyList: action.payload,
    }),

    updateReReplyFlag: (state, action) => ({
      reReplyFlag: action.payload,
    }),
  },
});

export const { updateReplyList, updateReReplyFlag } = comment.actions;

export default comment;
