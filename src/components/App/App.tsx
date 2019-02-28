import React       from 'react';
import SearchBar   from '../SearchBar/SearchBar';
import styles      from './App.module.css';
// import List        from '../List/List';
// import data        from '../../sampleResponse';
import { IResult } from '../../domain/result';
import Result      from '../Result/Result';
import List       from '../List/List';

const result: IResult = {
  title: "abc",
  snippet: "abc"
};
const results: IResult[] = [result];
const App = () => (
  <>
    <header className={styles.header}>
      <SearchBar/>
    </header>
    <main className={styles.main}>
      <Result {...result} />
      <Result snippet={"snippet"} title={"title"}/>
      <List results={results}/>
    </main>
  </>
);

export default App;
