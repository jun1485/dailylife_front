import { useState } from 'react';
import { useDispatch } from 'react-redux';

import '../Searching.css';

import useAxios from './useAxios';

import { postActions } from 'reducers/post';

function SearchForm() {
  const dispatch = useDispatch();
  const [typedKeyword, setTypedKeyword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const getPostData = (url) => {
    useAxios(url);
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
              getPostData(`process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?keyword=${typedKeyword}&pg=1`);
              console.log(getPostData);
              dispatch(postActions.updateItems(getPostData.data));
              setTypedKeyword(e.target.value);
              // axios
              //   .get(`${process.env.REACT_APP_HOST}
              // /api/board/getBoardNotLogin?keyword=${typedKeyword}&pg=1`, { })
              //   .then((res) => {
              //     dispatch(postActions.updateItems(res.data));
              //     setTypedKeyword(e.target.value);
              //   })
              //   .catch((res) => {
              //     console.log(res);
              //   });
            }
          }}
        />
        <input id="search_submit" value="Researcher" type="submit" />
      </form>
    </div>
  );
}

export default SearchForm;
