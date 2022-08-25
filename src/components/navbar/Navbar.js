import { Link } from "react-router-dom";
import Searching from "../search/Searching";
import "./Navbar.css";

function Navbar() {
  const accessToken = localStorage.getItem("accessToken");
  console.log("accessToken:", accessToken);
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <button className="nav-title">
            <Link to="/">
              <img className="logo" src="/assets/logo.png" alt="logo" />
            </Link>
          </button>
        </div>
        <div className="nav-searchBar">
          <Searching />
        </div>
        <div className="nav-links">
          <Link to="" className="link link1"></Link>

          {accessToken ? (
            <Link to="/post" className="link link2"></Link>
          ) : (
            <Link
              to="/login"
              className="link link2"
              onClick={(e) => {
                e.preventDefault();
                alert("로그인후 이용 가능합니다. 토큰값:", accessToken);
              }}
            ></Link>
          )}
          <Link to="/recentlyViewed" className="link link3"></Link>

          {accessToken ? (
            <Link to="/myInfo" className="link link4"></Link>
          ) : (
            <Link to="/login" className="link link4"></Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
