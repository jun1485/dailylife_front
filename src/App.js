import Cards from "./components/card/card";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/login/SignIn";
import Searching from "./components/search/Searching";
import RecentlyViewed from "./components/recentlyViewed/recentlyViewed";
import UserPost from "./components/UserPost/UserPost";
import { useSelector } from "react-redux";
import axios from "axios";

function App() {
  const cardData = useSelector((state) => state.post);
  const tokenInfo = useSelector((state) => state.authToken);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <button
              onClick={() => {
                axios
                  .get(`${process.env.REACT_APP_HOST}/api/board/getBoard/1`, {
                    headers: {
                      "X-ACCESS-TOKEN": tokenInfo.accessToken,
                    },
                  })
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((res) => {
                    console.log(res);
                  });
              }}
            >
              데이터받아오기
            </button>
            <Cards />
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
