import { configureStore } from "@reduxjs/toolkit";
import post from "./post";

export default configureStore({
  reducer: { post: post.reducer },
});
