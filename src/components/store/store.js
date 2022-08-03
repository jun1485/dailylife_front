import { configureStore } from "@reduxjs/toolkit";
import post from "./post";
import selectedPostData from "./selectedPostData";
import searchResult from "./searchResult";
import tokenSlice from "./authToken";

export default configureStore({
  reducer: {
    post: post.reducer,
    selectedPostData: selectedPostData.reducer,
    searchResult: searchResult.reducer,
    authToken: tokenSlice.reducer,
  },
});
