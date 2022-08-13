import "./index.css";
import Cards from "./components/card/card";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/login/SignIn";
import Searching from "./components/search/Searching";
import RecentlyViewed from "./components/recentlyViewed/recentlyViewed";
import UserPost from "./components/UserPost/UserPost";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { postActions } from "./components/store/post";
import Paging from "./components/Pagination/Pagination";

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
                  console.log(res.data);
                  dispatch(postActions.updateItems(res.data));
                })
                .catch((res) => {
                  console.log(res);
                });
              axios
                .get(
                  `${process.env.REACT_APP_HOST}/api/board/getBoardCount`,
                  {}
                )
                .then((res) => {
                  console.log(res);
                  setTotalPostCount(res.data);
                });
            }, [totalPostCount])}
            <Cards />
            <Paging totalPostCount={totalPostCount} />
          </>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
      <Route path="/recentlyViewed" element={<RecentlyViewed />}></Route>
      <Route path="/search" element={<Searching cardData={cardData} />}></Route>
      <Route path="/post" element={<UserPost />} />
    </Routes>
  );
}

export default App;
