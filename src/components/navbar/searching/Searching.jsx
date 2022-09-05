import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

import { postActions } from 'reducers/post';

import './Searching.css';

function Searching() {
  const dispatch = useDispatch();
  const [typedKeyword, setTypedKeyword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
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
                .get(`${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?keyword=${typedKeyword}&pg=1`, {})
                .then((res) => {
                  dispatch(postActions.updateItems(res.data));
                  setTypedKeyword(e.target.value);
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
  );
}

export default Searching;
