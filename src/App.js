import Cards from "./components/card/card";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/login/SignIn";
import Searching from "./components/search/Searching";
import UserPost from "./components/UserPost/UserPost";
import RecentlyViewed from "./components/recentlyViewed/recentlyViewed";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Cards />
          </>
        }
      ></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/post" element={<UserPost />} />
      <Route path="/recentlyViewed" element={<RecentlyViewed />} />
    </Routes>
  );
}

export default App;
