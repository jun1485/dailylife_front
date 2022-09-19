import { useEffect } from 'react';
import Pagination from 'react-js-pagination';

import '../Pagination/pagination.css';

function PagingProvider({
  itemCountPerPage,
  pageRangeCount,
  page,
  totalPostCount,
  handleChange,
}) {
  useEffect(() => {});
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={itemCountPerPage}
      totalItemsCount={Number(totalPostCount)}
      pageRangeDisplayed={pageRangeCount}
      prevPageText={<img src="/assets/prevPage.png" alt="" />}
      nextPageText={<img src="/assets/nextPage.png" alt="" />}
      onChange={handleChange}
    />
  );
}

export default PagingProvider;
