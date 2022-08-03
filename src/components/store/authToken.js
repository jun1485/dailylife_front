import { createSlice } from "@reduxjs/toolkit";

export const TOKEN_TIME_OUT = 600 * 10000;

export const authToken = createSlice({
    name: "authToken",
    initialState: {
        authenticated: false,
        accessToken: null,
        expireTime: null,
    },
    reducers: {
        SET_TOKEN: (state, action) => {
            state.authenticated = true;
            state.accessToken = action.payload;
            state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
        },
        DELETE_TOKEN: (state) => {
            state.authenticated = false;
            state.accessToken = null;
            state.expireTime = null;
        },
    },
});

export const { SET_TOKEN, DELETE_TOKEN } = authToken.actions;

export default authToken;