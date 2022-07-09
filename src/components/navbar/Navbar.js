import "./Navbar.css";
import { Link } from "react-router-dom";

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
          <a className="nav-links-logo">✏️</a>
          <a href="" target="_blank">
            🔎
          </a>
          <a href="" target="_blank">
            🚀
          </a>
          <a href="" target="_blank">
            🌞
          </a>
          <Link to="/login">🧑</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
