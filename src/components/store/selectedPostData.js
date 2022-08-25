import { createSlice } from "@reduxjs/toolkit";

const selectedPostData = createSlice({
  name: "selectedPostData",
  initialState: {
    src: "",
    title: "",
    content: "",
  },
  reducers: {
    updateData(state, action) {
      state.boardNum = action.payload.boardNum;
      state.src = action.payload.src;
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
  },
});

export const selectedPostActions = selectedPostData.actions;
export default selectedPostData;
