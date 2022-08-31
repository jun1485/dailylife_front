import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postActions } from "../../reducers/post";
import Searching from "../search/Searching";
import NewUserPost from "../UserPost/NewUserPost";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const [openPostModal, setOpenPostModal] = useState(false);

  useEffect(() => {
    if (openPostModal === true) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    console.log(`openPostModal: ${openPostModal}`);
    axios
      .get(`${process.env.REACT_APP_HOST}/api/board/getBoard`, {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log("postActions.updateIems: Card");
        console.log(res.data);
        dispatch(postActions.updateItems(res.data));
      })
      .catch((res) => {
        console.log(res);
      });
  }, [openPostModal]);

  const changeOpenPostModal = (e) => {
    setOpenPostModal(false);
  };

  return (
    <>
      <div className="nav">
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
          {/* <Link to="" className="link link1"></Link> */}

          {accessToken ? (
            <Link
              to="/post"
              // className="link link2"
            ></Link>
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
          <div
            className="link link3"
            onClick={() => {
              setOpenPostModal(true);
            }}
          >
            {openPostModal && (
              <NewUserPost changeOpenPostModal={changeOpenPostModal} />
            )}
          </div>

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
