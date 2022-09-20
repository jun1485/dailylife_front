import { createSlice } from '@reduxjs/toolkit';

const TOKEN_TIME_OUT = 600 * 10000;

const authToken = createSlice({
  name: 'authToken',
  initialState: {
    authenticated: false,
    accessToken: null,
    expireTime: null,
  },
  reducers: {
    SET_TOKEN: (state, action) => ({
      authenticated: true,
      accessToken: action.payload,
      expireTime: new Date().getTime() + TOKEN_TIME_OUT,
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
