import { useState } from 'react';
import { useDispatch } from 'react-redux';

import postApi from 'apis/postApi';
import { postActions } from 'reducers/post';

function usePagination({ boardCountPerPage, pageRangeCount }) {
  const dispatch = useDispatch();
  const [totalPostCount, setTotalPostCount] = useState('');

  const handleChange = (selectedPage) => {
    const fetchPages = async () => {
      const { data: postedItems } = await postApi.getItemByPage(selectedPage);
      dispatch(postActions.updateItems(postedItems));
      console.log('postedItems:', postedItems);
    };
    fetchPages();
  };

  const fetchTotalBoardCount = async () => {
    const { data: boardCount } = await postApi.getTotalPostCount();
    setTotalPostCount(boardCount);
  };
  fetchTotalBoardCount();
  return {
    boardCountPerPage,
    pageRangeCount,
    totalPostCount,
    handleChange,
  };
}

export default usePagination;
