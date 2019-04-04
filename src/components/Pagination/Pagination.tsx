import React from 'react';
import styles from './Pagination.module.css';

export interface PaginationProps {
  numPages: number,
  currentPage: number,
  onFirstPage: () => void,
  onPrevPage: () => void,
  onNextPage: () => void,
  onLastPage: () => void
}


const Pagination = (props: PaginationProps) => {
  return (
    <div className={styles.container}>
      <button type="button"
              className={`${styles.button} pagination-first`}
              disabled={props.currentPage === 1}
              onClick={props.onFirstPage}>
        <i className="fas fa-angle-double-left" />
      </button>
      <button type="button"
              className={`${styles.button} pagination-prev`}
              disabled={props.currentPage === 1}
              onClick={props.onPrevPage}>
        <i className="fas fa-angle-left" />
      </button>
      <div className={`${styles.label} pagination-label`}>
        Page {props.currentPage} of {props.numPages}
      </div>
      <button type="button"
              className={`${styles.button} pagination-next`}
              disabled={props.currentPage === props.numPages}
              onClick={props.onNextPage}>
        <i className="fas fa-angle-right" />
      </button>
      <button type="button"
              className={`${styles.button} pagination-last`}
              disabled={props.currentPage === props.numPages}
              onClick={props.onLastPage}>
        <i className="fas fa-angle-double-right" />
      </button>
    </div>
  );
};

export default Pagination;