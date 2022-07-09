import { Link } from "react-router-dom";
import "./login.css";

function SignIn() {
  return (
    <div className="login-page">
      <div className="form">
        <form>
          <input type="text" placeholder="id" />
          <input type="password" placeholder="password" autoComplete="on" />
          <input type="text" placeholder="email address" />
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
