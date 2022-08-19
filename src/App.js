import "./index.css";
import Cards from "./components/card/card";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import { Route, Routes } from "react-router-dom";
import Searching from "./components/search/Searching";
import RecentlyViewed from "./components/recentlyViewed/recentlyViewed";
import UserPost from "./components/UserPost/UserPost";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { postActions } from "./components/store/post";
import Paging from "./components/Pagination/Pagination";
import MyInfo from "./components/myInfo/MyInfo"

function App() {
  const dispatch = useDispatch();

  const store = useSelector((state) => state);
  const cardData = useSelector((state) => state.post);
  const [loadedData, setLoadedData] = useState("");
  const [totalPostCount, setTotalPostCount] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {useEffect(() => {
              axios
                .get(`${process.env.REACT_APP_HOST}/api/board/getBoard`, {})
                .then((res) => {
                  dispatch(postActions.updateItems(res.data));
                })
                .catch((res) => {
                  console.log(res);
                });

              axios
                .get(`${process.env.REACT_APP_HOST}/api/users/getAllUser`, {})
                .then((res) => {
                  console.log(res);
                });
              axios
                .get(
                  `${process.env.REACT_APP_HOST}/api/board/getBoardCount`,
                  {}
                )
                .then((res) => {
                  setTotalPostCount(res.data);
                });
              console.log(store.post);
            }, [totalPostCount])}
            <Cards />
            <Paging totalPostCount={totalPostCount} />
          </>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/recentlyViewed" element={<RecentlyViewed />}></Route>
      <Route path="/search" element={<Searching cardData={cardData} />}></Route>
      <Route path="/post" element={<UserPost />} />
      <Route path="/myInfo" element={<MyInfo />}></Route>
    </Routes>
  );
}

export default App;
