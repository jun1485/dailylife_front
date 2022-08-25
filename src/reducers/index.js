import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authToken from "./authToken";
import myInfo from "./myInfo";
import post from "./post";
import searchResult from "./searchResult";
import selectedPostData from "./selectedPostData";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authToken", "myInfo"],
};

export const rootReducer = combineReducers({
  authToken: authToken.reducer,
  myInfo: myInfo.reducer,
  post: post.reducer,
  searchResult: searchResult.reducer,
  selectedPostData: selectedPostData.reducer,
});

export default persistReducer(persistConfig, rootReducer);
