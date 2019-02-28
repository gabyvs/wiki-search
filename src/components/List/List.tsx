import React       from 'react';
import { IResult } from '../../domain/result';
import Result      from '../Result/Result';

export interface ListProps {
  results: IResult[]
}
const List = (props: ListProps) =>
  <>
    {
      props.results.map((result, i) => <Result {...result} key={i}/>)
    }
  </>

export default List;