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
      state.src = action.payload.src;
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
  },
});

export const postActions = selectedPostData.actions;
export default selectedPostData;
