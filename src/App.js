import Cards from "./components/card/card";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/login/SignIn";
import PostModal from "./components/postModal/PostModal";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {/* <PostModal /> */}
            <Cards />
          </>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
