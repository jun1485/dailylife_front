import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import "./Searching.css";
import { searchedDataActions } from "../store/searchResult";
import CardItem from "../card/cardItem";

function Searching(props) {
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.searchResult);
  const [searched, setSearched] = useState("");
  const getData = Object.values(props);
  const data = getData[0];
  const searchSpace = (e) => {
    setSearched(e.target.value);
  };

  const searchedData = data.filter((data) => {
    return data.text.toLowerCase().includes(searched.toLowerCase());
  });

  useEffect(() => {
    if (Array.isArray(searchedData) !== true) {
      console.log("배열이 아님;");
    } else {
      console.log(searchedData);
      // dispatch(
      //   searchedDataActions.updateItems({
      //     src: searchedData.src,
      //     text: searchedData.text,
      //     underInfo: searchedData.underInfo,
      //   })
      // );
    }
    searchedData.map((data, i) => {
      return (
        <CardItem src={data.src} text={data.text} underInfo={data.underInfo} />
      );
    });
    // console.log(searchResult);
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
