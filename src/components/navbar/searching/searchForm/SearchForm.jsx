import axios from 'axios';
import '../Searching.scss';

import { postActions } from 'reducers/post';
import { useAppDispatch } from 'store/hooks';
import { updateSearchedKeyword } from 'reducers/searchResult';

function SearchForm() {
  const dispatch = useAppDispatch();

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
              dispatch(updateSearchedKeyword(e.target.value));
              // getPostData(`process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?keyword=${typedKeyword}&pg=1`);
              // console.log(getPostData);
              // dispatch(postActions.updateItems(getPostData.data));
              // setTypedKeyword(e.target.value);
              axios
                .get(
                  `${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?keyword=${e.target.value}`,
                  {},
                )
                .then((res) => {
                  console.log('in SearchForm', res.data);
                  dispatch(postActions.updateItems(res.data));
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

export default SearchForm;
