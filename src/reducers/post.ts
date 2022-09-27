import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPost {
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 18e24a6041e2cb126b37bf02972a143b89bf9a80
=======
>>>>>>> b04d5faa89c9f99cef1bb5c5648137364c9a22bd
const post = createSlice({
  name: 'post',
  initialState: {
    pageNum: 1,
    // isOpenWritePostModal: false,
    myValues: [] as IPost[],
  },
  reducers: {
<<<<<<< HEAD
<<<<<<< HEAD
    // updateItems(state, action) {
    //   state.myValues = action.payload;
    // },
    // updatePageNum(state, action) {
    //   state.PageNum = action.payload;
    // },
=======
>>>>>>> 18e24a6041e2cb126b37bf02972a143b89bf9a80
=======
>>>>>>> b04d5faa89c9f99cef1bb5c5648137364c9a22bd
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 18e24a6041e2cb126b37bf02972a143b89bf9a80
=======
>>>>>>> b04d5faa89c9f99cef1bb5c5648137364c9a22bd
export default post;
