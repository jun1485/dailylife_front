import { createSlice } from "@reduxjs/toolkit";

const myInfo = createSlice({
  name: "myInfo",
  initialState: {
    userNum: "",
    userInfo: "",
  },

  reducers: {
    updateUserNum(state, aciton) {
      state.userNum = aciton.payload;
    },
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const myInfoActions = myInfo.actions;
export default myInfo;
