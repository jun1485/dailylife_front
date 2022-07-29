import Cards from "./components/card/card";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/login/SignIn";
import Searching from "./components/search/Searching";
import RecentlyViewed from "./components/recentlyViewed/recentlyViewed";
import { useSelector } from "react-redux";

function App() {

  const cardData = useSelector((state) => state.post);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {/* <Searching /> */}
            <Cards />
          </>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
      <Route path="/recentlyViewed" element={<RecentlyViewed />}></Route>
      <Route path="/search" element={<Searching cardData={cardData}/>}></Route>
    </Routes>
  );
}

export default App;
