import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);

    axios
      // URL은 정확한 경로를 입력할 필요가 있습니다.
      .post("http://localhost:8080", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="login-page">
      <div className="form">
        <form action="/signin" method="POST" onSubmit={handleSubmit}>
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
          <input
            type="text"
            placeholder="email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>create</button>
          <p className="message">
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
