import { createSlice } from '@reduxjs/toolkit';

const myInfo = createSlice({
  name: 'myInfo',
  initialState: {
    userNum: '',
    userInfo: '',
  },

  reducers: {
    updateUserNum: (aciton) => ({
      userNum: aciton.payload,
    }),
    updateUserInfo: (action) => ({
      userInfo: action.payload,
    }),
  },
});

export const myInfoActions = myInfo.actions;
export default myInfo;
