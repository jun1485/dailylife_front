import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="id" />
          <input type="password" placeholder="password" autoComplete="on" />
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
