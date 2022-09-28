import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPost {
  boardNum: number;
  content: string;
  heart: boolean;
  originalFileName: string[];
  serverFileUrl: string[];
  title: string;
  userName: string;
}
interface State {
  pageNum: number;
  myValues: IPost[];
}
const post = createSlice({
  name: 'post',
  initialState: {
    pageNum: 1,
    // isOpenWritePostModal: false,
    myValues: [] as IPost[],
  },
  reducers: {
    updateItems: (state, action: PayloadAction<IPost[]>): State => ({
      ...state,
      myValues: action.payload,
    }),
    updatePageNum: (state, action: PayloadAction<number>): State => ({
      ...state,
      pageNum: action.payload,
    }),
  },
});

export const postActions = post.actions;
export default post;
