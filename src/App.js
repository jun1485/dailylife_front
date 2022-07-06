import Cards from "./components/card/card";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import SignIn from "./components/login/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Cards />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/signIn"
          element={
            <>
              <Navbar />
              <SignIn />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
