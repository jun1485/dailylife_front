import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import "./Searching.css";
import { searchedDataActions } from "../store/searchResult";
import { postActions } from "../store/post";

function Searching({ cardData }) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searched, setSearched] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const searchSpace = (e) => setSearched(e.target.value);

  const searchedData = cardData.myValues.filter((data) =>
    data.text.toLowerCase().includes(searched.toLowerCase())
  );

  useEffect(() => {
    setFilteredData(store.post.myValues);
    console.log(filteredData);
  }, []);

  useEffect(() => {
    if (!Array.isArray(searchedData)) {
      console.log("배열이 아님;");
    } else {
      dispatch(postActions.updateItems(searchedData));
      if (searchedData.length === 0) {
        dispatch(postActions.updateItems(filteredData));
      }
      console.log(searched);
      console.log(searchedData);
    }
  }, [searched]);

  return (
    <>
      <div id="wrap">
        <form action="" autoComplete="on">
          <input
            className="searchBar"
            id="search"
            name="search"
            type="text"
            placeholder="looking for ..."
            onChange={searchSpace}
          />
          <input id="search_submit" value="Researcher" type="submit" />
        </form>
      </div>
    </>
  );
}

export default Searching;
