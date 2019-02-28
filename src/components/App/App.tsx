import React       from 'react';
import SearchBar   from '../SearchBar/SearchBar';
import styles      from './App.module.css';
import List        from '../List/List';
import data        from '../../sampleResponse';
import { IResult } from '../../domain/result';

const results: IResult[] = data.query.search;
const App = () => (
  <>
    <header className={styles.header}>
      <SearchBar/>
    </header>
    <main className={styles.main}>
      <List results={results}/>
    </main>
  </>
);

export default App;
