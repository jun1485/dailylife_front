import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <button className="nav-title">
            <Link to="/">Daily Life</Link>
          </button>
        </div>
        <div className="nav-btn">
          <label>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link to="/post">✏️</Link>
          <Link to="">🚀</Link>
          <Link to="">🌞</Link>
          <Link to="/login">🧑</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
