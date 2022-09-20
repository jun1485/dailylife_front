import { createSlice } from '@reduxjs/toolkit';

const authToken = createSlice({
  name: 'authToken',
  initialState: {
    accessToken: null,
  },
  reducers: {
    SET_TOKEN: (state, action) => ({
      accessToken: action.payload,
    }),
    DELETE_TOKEN: () => ({
      authenticated: false,
      accessToken: null,
      expireTime: null,
    }),
  },
});

export const { SET_TOKEN, DELETE_TOKEN } = authToken.actions;

export default authToken;
