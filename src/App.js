import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Searching from "./components/search/Searching";
import RecentlyViewed from "./components/recentlyViewed/recentlyViewed";
import UserPost from "./components/UserPost/UserPost";
import MyInfo from "./components/myInfo/MyInfo";
import axios from "axios";
import { useEffect } from "react";
import { LoadingSpinner } from "./components/styledComponents/Loading";
import { myInfoActions } from "./components/store/myInfo";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const cardData = useSelector((state) => state.post);
  const userData = useSelector((state) => state.myInfo);

  useEffect(() => {
    if (!userData.userNum && localStorage.getItem("accessToken")) {
      axios
        .post(`${process.env.REACT_APP_HOST}/api/users/getUserNum`, null, {
          headers: {
            "X-ACCESS-TOKEN": localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          dispatch(myInfoActions.updateUserNum(res.data.data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/recentlyViewed" element={<RecentlyViewed />} />
        <Route path="/search" element={<Searching cardData={cardData} />} />
        <Route path="/post" element={<UserPost />} />
        <Route path="/myInfo" element={<MyInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
