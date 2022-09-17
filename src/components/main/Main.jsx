/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, React } from 'react';

import Cards from '../card/card';

import usePagination from 'components/pagination/usePagination';
import PagingProvider from 'components/pagingProvider/pagingProvider';

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
