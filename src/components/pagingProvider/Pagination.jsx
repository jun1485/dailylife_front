import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch } from 'react-redux';

import { postActions } from '../../reducers/post';
import './Pagination.css';

function Paging() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [rerender, setRerender] = useState('');
  const [totalPostCount, setTotalPostCount] =
    useState('');

  const pageChangeHandler = (data) => {
    axios
      .get(
        `${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?pg=${data}`,
      )
      .then((res) => {
        // console.log(res.data);
        console.log(
          'AJAX in pageChangeHandler: Pagination.js',
        );
        dispatch(
          postActions.updateItems(res.data),
        );
        setRerender('');
      })
      .catch((res) => {
        console.log(res);
      });
    setPage(() => {
      setRerender(1);
      return data;
    });
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?pg=${page}`,
      )
      .then(() => {
        // console.log(res.data);
        console.log(
          'postActions.updatePageNum: Pagination.js',
        );
        console.log('page: Pagination.js', page);
        dispatch(postActions.updatePageNum(page));
        setRerender('');
      })
      .catch((res) => {
        console.log(res);
      });
    axios
      .get(
        `${process.env.REACT_APP_HOST}/api/board/getBoardCount`,
        {},
      )
      .then((res) => {
        setTotalPostCount(res.data);
      });
  }, [rerender, totalPostCount]);

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={15}
      totalItemsCount={Number(totalPostCount)}
      pageRangeDisplayed={5}
      prevPageText={
        <img src="/assets/prevPage.png" alt="" />
      }
      nextPageText={
        <img src="/assets/nextPage.png" alt="" />
      }
      onChange={pageChangeHandler}
    />
  );
}

export default Paging;
