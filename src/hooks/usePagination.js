import postApi from 'apis/postApi';
import { postActions } from 'reducers/post';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useEffect, useState } from 'react';

function usePagination({ boardCountPerPage, pageRangeCount }) {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state);
  const [postCount, setPostCount] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function foo() {
      const x = await fetchTotalBoardCount();
      setPostCount(() => x);
    }
    if (store.searchResult.result) {
      setPostCount(() => store.post.myValues.length);
    } else foo();
  }, [store.searchResult.result]);

  const handleChange = (selectedPage) => {
    const fetchPages = async () => {
      const { data: postedItems } = await postApi.getItemByPage(selectedPage);
      dispatch(postActions.updateItems(postedItems));
      console.log('postedItems:', postedItems);
    };
    fetchPages();
    setPage(selectedPage);
  };
  const fetchTotalBoardCount = async () => {
    const { data: boardCount } = await postApi.getTotalPostCount();
    // setTotalPostCount(boardCount);
    return boardCount;
  };

  return {
    boardCountPerPage,
    pageRangeCount,
    postCount,
    handleChange,
    page,
  };
}

export default usePagination;
