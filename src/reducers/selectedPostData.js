import { createSlice } from '@reduxjs/toolkit';

const selectedPostData = createSlice({
  name: 'selectedPostData',
  initialState: {
    boardNum: '',
    src: '',
    title: '',
    content: '',
  },
  reducers: {
    updateData: (state, action) => ({
      boardNum: action.payload.boardNum,
      src: action.payload.src,
      title: action.payload.title,
      content: action.payload.content,
    }),
  },
});

export const selectedPostActions = selectedPostData.actions;
export default selectedPostData;
