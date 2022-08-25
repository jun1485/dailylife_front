import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../../reducers/post";
import Cards from "../card/card";
import Paging from "../Pagination/Pagination";

export default function Main() {
  const [totalPostCount, setTotalPostCount] = useState("");
  const dispatch = useDispatch();
  const [modalOpacity, setModalOpacity] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin`, {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res);
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
  }, [totalPostCount, modalOpacity]);

  return (
    <>
      <Cards setModalOpacity={setModalOpacity} modalOpacity={modalOpacity} />
      <Paging totalPostCount={totalPostCount} />
    </>
  );
}
