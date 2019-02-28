import React  from 'react';
import styles from './SearchBar.module.css';

export interface SearchBarProps {
  searchTerm?: string;
}

const SearchBar = ({ searchTerm = '' }: SearchBarProps) => {
  return (
    <>
      <h1 title="WikiSearch">
        <i className={`fab fa-wikipedia-w ${styles.logo}`} />
      </h1>
      <form className={styles.form}>
        <input type="search" className={styles.input} value={searchTerm}/>
        <button type="submit" className={styles.button}>
          <i className={`fas fa-search ${styles.icon}`} />
        </button>
        <button type="button" className={styles.button}>
          <i className={`fas fa-random ${styles.icon}`} />
        </button>
      </form>
    </>
  );
};

export default SearchBar;