import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import "./Searching.css";
import { searchedDataActions } from "../store/searchResult";
import { postActions } from "../store/post";

function Searching(props) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const [searched, setSearched] = useState("");
  const getData = Object.values(props);
  const data = getData[0];
  const searchSpace = (e) => {
    setSearched(e.target.value);
  };

  const searchedData = data.myValues.filter((data) => {
    return data.text.toLowerCase().includes(searched.toLowerCase());
  });

  useEffect(() => {
    if (Array.isArray(searchedData) !== true) {
      console.log("배열이 아님;");
    } else {
      dispatch(postActions.updateItems(searchedData));

      console.log(post);
    }
  }, searchedData);

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
