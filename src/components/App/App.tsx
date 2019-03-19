import React       from 'react';
import { IResult } from '../../domain/result';
import data        from '../../sampleResponse';
import Controls    from '../Controls/Controls';
import List        from '../List/List';
import SearchBar   from '../SearchBar/SearchBar';
import styles      from './App.module.css';

const results: IResult[] = data.query.search;
const App = () => (
  <>
    <header className={styles.header}>
      <SearchBar/>
    </header>
    <main className={styles.main}>
      <List results={results}/>
      <Controls />
    </main>
  </>
);

export default App;
