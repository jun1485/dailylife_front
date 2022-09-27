import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISelectedPostData {
  boardNum: number;
  src: string;
  title: string;
  content: string;
}

const selectedPostData = createSlice({
  name: 'selectedPostData',
  initialState: {
    boardNum: -1,
    src: '',
    title: '',
    content: '',
  },
  reducers: {
    updateData: (
      state,
      action: PayloadAction<ISelectedPostData>,
    ): ISelectedPostData => ({
      boardNum: action.payload.boardNum,
      src: action.payload.src,
      title: action.payload.title,
      content: action.payload.content,
    }),
  },
});

export const selectedPostActions = selectedPostData.actions;
export default selectedPostData;
