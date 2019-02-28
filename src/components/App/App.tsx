import React     from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './App.module.css';

const App = () => (
  <>
    <header className={styles.header}>
      <SearchBar/>
    </header>
    <main className={styles.main} />
  </>
);

export default App;
