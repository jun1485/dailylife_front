import { configureStore } from "@reduxjs/toolkit";
import post from "./post";
import selectedPostData from "./selectedPostData";

export default configureStore({
  reducer: { post: post.reducer, selectedPostData: selectedPostData.reducer },
});
