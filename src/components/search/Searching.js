import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import "./Searching.css";
import { searchedDataActions } from "../store/searchResult";

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

  return (
    <>
      <div id="wrap">
        <form action="" autoComplete="on">
          <input
            className="searchBar"
            id="search"
            name="search"
            type="text"
            placeholder="검색"
            onChange={(e) => {
              // setSearched(e.target.value);
              // setFilteredData(searchedData);
            }}
          />
          <input id="search_submit" value="Researcher" type="submit" />
        </form>
      </div>
    </>
  );
}

export default Searching;
