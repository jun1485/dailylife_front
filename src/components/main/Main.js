import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../store/post";
import Cards from "../card/card";
import Paging from "../Pagination/Pagination";

export default function Main() {
  const [totalPostCount, setTotalPostCount] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/api/board/getBoard`, {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        dispatch(postActions.updateItems(res.data));
      })
      .catch((res) => {
        console.log(res);
      });

    axios
      .get(`${process.env.REACT_APP_HOST}/api/board/getBoardCount`, {})
      .then((res) => {
        setTotalPostCount(res.data);
      });
  }, [totalPostCount]);

  return (
    <>
      <Cards />
      <Paging totalPostCount={totalPostCount} />
    </>
  );
}
