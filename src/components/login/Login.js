import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import { SET_TOKEN } from "../../reducers/authToken";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { LoadingSpinner } from "../styledComponents/Loading";
import { myInfoActions } from "../../reducers/myInfo";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenInfo = useSelector((state) => state.authToken);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

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
        setLoading(false);
        localStorage.setItem("accessToken", res.data.data.accessToken);
        console.log(res);
        dispatch(SET_TOKEN(res.data.data.accessToken));
        console.log("token: " + JSON.stringify(tokenInfo));
        dispatch(myInfoActions.updateUserNum(res.data.data.userNum));
        navigate("/");
      })
      .catch((errStatus) => {
        setLoading(false);
        console.log(errStatus);
        if (errStatus.response.status === 400)
          alert("아이디와 비밀번호를 입력해주세요 !");
        else if (errStatus.response.status === 500)
          alert(
            `아이디 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요.`
          );
      });
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
          {loading && <LoadingSpinner />}
          <input
            type="text"
            placeholder="아이디"
            style={
              username
                ? { border: "1px solid #FCC401", color: "#1A1A1A" }
                : { border: "1px solid #d7d7d7" }
            }
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            autoComplete="on"
            style={
              password
                ? { border: "1px solid #FCC401", color: "#1A1A1A" }
                : { border: "1px solid #d7d7d7" }
            }
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>로그인</button>
          {/* <p className="message">
            {" "}
            Not registered? <Link to="/SignIn">Create an account</Link>
          </p> */}
          <div className="support">
            <span className="find_user">
              <Link to="">아이디 · 비밀번호 찾기</Link>
            </span>
            <span className="signup">
              <Link to="/signup">회원가입</Link>
            </span>
            <div className="separate"></div>
            <div className="third_party">
              <span>간편 로그인</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="kakao"
              >
                <rect
                  width="37.5"
                  height="37.5"
                  transform="translate(-3.75 -3.75)"
                  fill="#EDE64E"
                />
                <path
                  d="M15 7.69423C16.6272 7.69423 18.1323 8.01064 19.5151 8.64345C20.8979 9.27626 21.9911 10.1368 22.7946 11.2249C23.5982 12.3131 24 13.5 24 14.7857C24 16.0715 23.5982 17.2601 22.7946 18.3516C21.9911 19.4431 20.8996 20.3053 19.5201 20.9381C18.1406 21.5709 16.6339 21.8873 15 21.8873C14.4844 21.8873 13.952 21.8505 13.4029 21.7768C11.019 23.4308 9.75 24.2679 9.59598 24.288C9.52232 24.3148 9.45201 24.3114 9.38504 24.2779C9.35826 24.2578 9.33817 24.2311 9.32478 24.1976C9.31138 24.1641 9.30469 24.134 9.30469 24.1072V24.067C9.34487 23.8058 9.64955 22.7177 10.2188 20.8025C8.92634 20.1596 7.90011 19.3075 7.14007 18.2461C6.38002 17.1847 6 16.0313 6 14.7857C6 13.5 6.40179 12.3131 7.20536 11.2249C8.00893 10.1368 9.10212 9.27626 10.4849 8.64345C11.8677 8.01064 13.3728 7.69423 15 7.69423Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
