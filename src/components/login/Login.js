import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    axios
      .post("http://localhost:8080", formData)
      .then((res) => console.log(res))
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
