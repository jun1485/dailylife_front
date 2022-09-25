import Pagination from 'react-js-pagination';

import 'components/pagingProvider/pagingProvider.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function PagingProvider({
  itemCountPerPage,
  pageRangeCount,
  page,
  totalPostCount,
  handleChange,
}) {
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
