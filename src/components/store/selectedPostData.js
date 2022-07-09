import { createSlice } from "@reduxjs/toolkit";

const selectedPostData = createSlice({
  name: "selectedPostData",
  initialState: {
    src: "",
    text: "",
    underInfo: "",
  },
  reducers: {
    updateData(state, action) {
      state.src = action.payload.src;
      state.text = action.payload.text;
      state.underInfo = action.payload.underInfo;
    },
  },
});

export const postActions = selectedPostData.actions;
export default selectedPostData;
