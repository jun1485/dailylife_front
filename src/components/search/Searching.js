import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import "./Searching.css";
import { searchedDataActions } from "../../reducers/searchResult";
import axios from "axios";
import { postActions } from "../../reducers/post";

function Searching(props) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searched, setSearched] = useState("");
  const getData = Object.values(props);
  const data = getData[0];

  const [page, setPage] = useState(1);
  const [typedKeyword, setTypedKeyword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div id="wrap">
        <form action="" onSubmit={submitHandler} autoComplete="on">
          <input
            className="searchBar"
            id="search"
            name="search"
            type="text"
            placeholder="검색"
            onKeyUp={(e) => {
              if (window.event.keyCode === 13) {
                axios
                  .get(
                    `${process.env.REACT_APP_HOST}/api/board/getBoard?keyword=${e.target.value}&pg=1`,
                    {}
                  )
                  .then((res) => {
                    dispatch(postActions.updateItems(res.data));
                    setTypedKeyword(e.target.value);
                  })
                  .catch((res) => {
                    console.log(res);
                  });
              }
            }}
          ></input>
          <input id="search_submit" value="Researcher" type="submit" />
        </form>
      </div>
    </>
  );
}

export default Searching;
