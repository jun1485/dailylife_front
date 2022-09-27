import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const myInfo = createSlice({
  name: 'myInfo',
  initialState: {
    userNum: -1,
  },

  reducers: {
    updateUserNum: (state, action: PayloadAction<number>): void => {
      // userNum: action.payload,
      state.userNum = action.payload;
    },
  },
});

export const myInfoActions = myInfo.actions;
export default myInfo;
