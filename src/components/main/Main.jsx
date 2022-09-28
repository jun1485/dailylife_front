import Cards from 'components/card/Card';
import PagingProvider from 'components/pagingProvider/PagingProvider';
import usePagination from 'hooks/usePagination';

export default function Main() {
  const boardCountPerPage = 15;
  const pageRangeCount = 5;
  const boardPagingInfo = usePagination({ boardCountPerPage, pageRangeCount });
  return (
    <>
      <Cards />
      <PagingProvider {...boardPagingInfo} />
    </>
  );
}
