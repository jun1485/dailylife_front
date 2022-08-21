import { createSlice } from "@reduxjs/toolkit";

const myInfo = createSlice({
    name: "myInfo",
    initialState: {
        userNum: "",
    },
});

export default myInfo;
