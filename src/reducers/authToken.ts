import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authToken = createSlice({
  name: 'authToken',
  initialState: {
    accessToken: '',
  },
  reducers: {
    SET_TOKEN: (state, action: PayloadAction<string>) => ({
      ...state,
      accessToken: action.payload,
    }),
  },
});

export const { SET_TOKEN } = authToken.actions;

export default authToken;
