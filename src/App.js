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

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const cardData = useSelector((state) => state.post);

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
