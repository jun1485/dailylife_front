import Cards from "./components/card/card";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/login/SignIn";
import Searching from "./components/search/Searching";
import UserPost from "./components/UserPost/UserPost";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Searching />
            <Cards />
          </>
        }
      />
      <Route path="/post" element={<UserPost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
