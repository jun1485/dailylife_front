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
        <div className="nav-links">
          <Link to="" className="link link1"></Link>
          <Link to="/post" className="link link2"></Link>
          <Link to="/recentlyViewed" className="link link3"></Link>
          <Link to="/login" className="link link4"></Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
