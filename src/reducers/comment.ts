import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Icomment {
  boardNum: number;
  replyContext: string;
  replyNum: number;
  replyTime: string;
  userName: string;
  userNum: number;
}

interface IcommentState {
  replyList: Icomment[];
  reReplyFlag: string[];
}

const comment = createSlice({
  name: 'comment',
  initialState: {
    replyList: [],
    reReplyFlag: [],
  } as IcommentState,

  reducers: {
    updateReplyList: (state, action: PayloadAction<Icomment[]>) => ({
      ...state,
      replyList: action.payload,
    }),

    updateReReplyFlag: (state, action: PayloadAction<string[]>) => ({
      ...state,
      reReplyFlag: action.payload,
    }),
  },
});

export const { updateReplyList, updateReReplyFlag } = comment.actions;

export default comment;
