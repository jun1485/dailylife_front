import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import { SET_TOKEN } from "../store/authToken";
import { useDispatch, useSelector } from "react-redux/es/exports";

function Login() {
  const dispatch = useDispatch();
  const tokenInfo = useSelector((state) => state.authToken);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_HOST}/api/users/login`,
        {
          userId: username,
          userPassword: password,
        },
        {
          headers: {
            "X-ACCESS-TOKEN": localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(SET_TOKEN(res.data.data.accessToken));
        console.log("token: " + JSON.stringify(tokenInfo));
        // window.location.href = "/#";
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="login-page">
      <div className="form">
        <form
          className="login-form"
          action="/login"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="id"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>login</button>
          <p className="message">
            {" "}
            Not registered? <Link to="/SignIn">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
