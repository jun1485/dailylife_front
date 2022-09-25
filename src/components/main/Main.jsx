import { useEffect } from 'react';

import Cards from 'components/card/Card';
import PagingProvider from 'components/pagingProvider/PagingProvider';
import usePagination from 'hooks/usePagination';
import { useSelector } from 'react-redux';

export default function Main() {
  console.log('executes Main');
  useEffect(() => {
    console.log('rendered Main');
  });
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
