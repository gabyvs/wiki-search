import React      from 'react';
import { IResult } from '../../domain/result';
import styles from './Result.module.css';

const Result = (props: IResult) => (
  <div className={styles.result}>
    <h3 className={styles.title}>
      <a className={styles.link}
         href={props.url}
         target="_blank"
         rel="noopener">{props.title}</a>
    </h3>
    <div className={styles.snippet}>{props.snippet}</div>
    <a className={styles.link}
       href={props.url}
       target="_blank"
       rel="noopener">{props.url}</a>
  </div>
);

export default Result;