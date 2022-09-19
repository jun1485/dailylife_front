import { createSlice } from '@reduxjs/toolkit';

const myInfo = createSlice({
  name: 'myInfo',
  initialState: {
    userNum: '',
    userInfo: '',
  },

  reducers: {
    updateUserNum(state, aciton) {
      // eslint-disable-next-line no-param-reassign
      state.userNum = aciton.payload;
    },
    updateUserInfo(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.userInfo = action.payload;
    },
  },
});

export const myInfoActions = myInfo.actions;
export default myInfo;
