import Cards from "./components/card/card";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/login/SignIn";
import Searching from "./components/search/Searching";

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
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
