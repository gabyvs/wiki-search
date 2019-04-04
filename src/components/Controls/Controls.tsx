import React      from 'react';
import Pagination from '../Pagination/Pagination';

const Controls = () => (
  <div>
    <Pagination
      numPages={3}
      currentPage={2}
      onFirstPage={() => {}}
      onPrevPage={() => {}}
      onNextPage={() => {}}
      onLastPage={() => {}}
      />
  </div>
);

export default Controls;