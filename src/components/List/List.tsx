import React       from 'react';
import { IResult } from '../../domain/result';
import Result      from '../Result/Result';
import styles      from './List.module.css';

export interface ListProps {
  results: IResult[]
}
const List = (props: ListProps) => (
  <div className={styles.list}>
    {
      props.results.map((result, i) => <Result {...result} key={i}/>)
    }
  </div>
);


export default List;