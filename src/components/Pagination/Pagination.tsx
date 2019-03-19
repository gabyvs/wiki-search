import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ numPages }: { numPages: number }) => {
  let buttons = [];
  const init = numPages <=5 ? 1 : 1; // TODO: consider active page relative to total pages
  for (let i = 1; i <= numPages; i++) {
    buttons.push(
      <button type="button" className={styles.button} key={i}>
        <span>{i}</span>
      </button>
    );
  }

  return (
    <div className={styles.container}>
      <button type="button" className={styles.button}><i className="fas fa-angle-double-left" /></button>
      <button type="button" className={styles.button}><i className="fas fa-angle-left" /></button>
      { buttons }
      <button type="button" className={styles.button}><i className="fas fa-angle-right" /></button>
      <button type="button" className={styles.button}><i className="fas fa-angle-double-right" /></button>
    </div>
  );
};

export default Pagination;