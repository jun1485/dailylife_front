import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myInfoActions } from "../../reducers/myInfo";
import "./myinfo.css";

export default function MyInfo() {
  const userData = useSelector((state) => state.myInfo);
  const dispatch = useDispatch();

  console.log(userData);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      axios
        .post(
          `${process.env.REACT_APP_HOST}/api/users/details/${userData.userNum}`,
          null,
          {
            headers: {
              "X-ACCESS-TOKEN": localStorage.getItem("accessToken"),
            },
          }
        )
        .then((res) => dispatch(myInfoActions.updateUserInfo(res.data.data)))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      {userData.userInfo.userName}님의 회원 정보 페이지입니다.
      <div className="profile-container">
        <div className="user-email">
          userEmail: {userData.userInfo.userEmail}
        </div>
        <div className="user-id">userId: {userData.userInfo.userId}</div>
      </div>
    </div>
  );
}
