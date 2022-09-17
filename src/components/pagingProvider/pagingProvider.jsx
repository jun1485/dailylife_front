import Pagination from 'react-js-pagination';
import '../pagination/pagination.css'

function PagingProvider({
  itemCountPerPage,
  pageRangeCount,
  page,
  totalPostCount,
  handleChange, }) {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={itemCountPerPage}
      totalItemsCount={Number(totalPostCount)}
      pageRangeDisplayed={pageRangeCount}
      prevPageText={
        <img src="/assets/prevPage.png" alt="" />
      }
      nextPageText={
        <img src="/assets/nextPage.png" alt="" />
      }
      onChange={handleChange}
    />
  );
}

export default PagingProvider;
