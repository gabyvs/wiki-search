import React      from 'react';
import { IResult } from '../domain/result';
import './Result.css';

const Result = (props: IResult) => (
  <div className="result">
    <h3 className="result-title">
      <a className="result-title-link"
         href={props.url}
         target="_blank"
         rel="noopener">{props.title}</a>
    </h3>
    <div className="result-snippet">{props.snippet}</div>
    <a className="result-title-link"
       href={props.url}
       target="_blank"
       rel="noopener">{props.url}</a>
  </div>
);

export default Result;