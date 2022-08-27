import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../../reducers/post";
import Cards from "../card/card";
import Paging from "../Pagination/Pagination";

export default function Main() {
  console.log(
    "executes Main------------------------------------------------------------------------------------------------"
  );
  const [totalPostCount, setTotalPostCount] = useState("");
  const dispatch = useDispatch();
  const [modalOpacity, setModalOpacity] = useState(0);

  useEffect(() => {
    console.log("rendered Main");
    axios
      .get(`${process.env.REACT_APP_HOST}/api/board/getBoardCount`, {})
      .then((res) => {
        console.log("AJAX in Main");
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
