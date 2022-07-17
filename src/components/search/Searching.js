import { useEffect } from "react";
import "./Searching.css";

function Searching() {
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
          />
          <input id="search_submit" value="Rechercher" type="submit" />
        </form>
      </div>
    </>
  );
}

export default Searching;
