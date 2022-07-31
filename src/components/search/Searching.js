import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import "./Searching.css";
import { searchedDataActions } from "../store/searchResult";
import { postActions } from "../store/post";

function Searching(props) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searched, setSearched] = useState("");
  const getData = Object.values(props);
  const data = getData[0];
  const searchSpace = (e) => setSearched(e.target.value);
  const [filteredData, setFilteredData] = useState(data.myValues);
  const searchedData = data.myValues.filter((data) =>
    data.text.toLowerCase().includes(searched.toLowerCase())
  );

  useEffect(() => {
    if (!Array.isArray(searchedData)) {
      console.log("배열이 아님");
    } else {
      setFilteredData(searchedData);
      dispatch(searchedDataActions.bringItems(filteredData));
    }
  }, [searchedData]);

  return (
    <>
      <div id="wrap">
        <form action="" autoComplete="on">
          <input
            className="searchBar"
            id="search"
            name="search"
            type="text"
            placeholder="Looking for ..."
            onChange={searchSpace}
          />
          <input id="search_submit" value="Researcher" type="submit" />
        </form>
      </div>
    </>
  );
}

export default Searching;
