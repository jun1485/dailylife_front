import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import "./Searching.css";
import { searchedDataActions } from "../store/searchResult";
import axios from "axios";
import { postActions } from "../store/post";

function Searching(props) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searched, setSearched] = useState("");
  const getData = Object.values(props);
  const data = getData[0];

  // const [filteredData, setFilteredData] = useState(data.myValues);
  // const searchedData = data.myValues.filter((data) =>
  //   data.title.toLowerCase().includes(searched.toLowerCase())
  // );

  // useEffect(() => {
  //   console.log(searchedData);
  //   if (!Array.isArray(searchedData)) {
  //     console.log("배열이 아님");
  //   } else {
  //     dispatch(searchedDataActions.bringItems(filteredData));
  //     console.log(store.searchResult);
  //   }
  // }, [searched]);

  const [page, setPage] = useState(1);
  const [typedKeyword, setTypedKeyword] = useState();
  const [rerender, setRerender] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setRerender(1);
  };

  useEffect(() => {
    setRerender(1);
  }, [dispatch]);

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
                setTypedKeyword(e.target.value);
                axios
                  .get(
                    `${process.env.REACT_APP_HOST}/api/board/getBoard?keyword=${typedKeyword}&pg=1`,
                    {}
                  )
                  .then((res) => {
                    // console.log(res);
                    dispatch(postActions.updateItems(res.data));
                    // console.log(store.post);
                  })
                  .catch((res) => {
                    console.log(res);
                  });
              }
            }}
          />
          <input id="search_submit" value="Researcher" type="submit" />
        </form>
      </div>
    </>
  );
}

export default Searching;
