import React        from 'react';
import {
  shallow,
  ShallowWrapper }  from 'enzyme';
import Result       from './Result';
import { IResult }  from '../../domain/result';

describe('Result', () => {
  let result: ShallowWrapper;
  let props: IResult;

  beforeEach(() => {
    props = {
      url: 'www.url.com',
      title: 'A title for the result',
      snippet: 'This would be a description for the result.'
    };
    result = shallow(<Result {...props} />)
  });

  it('renders without crashing', () => {});

  it('renders correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('renders links with the passed url', () => {
    expect(result.find(`[href="${props.url}"]`)).toHaveLength(2);
  });

  it('renders title', () => {
    expect(result.find('a').at(0).text()).toBe(props.title);
  });

  it('renders url', () => {
    expect(result.find('a').at(1).text()).toBe(props.url);
  });

  it('renders snippet', () => {
    expect(result.find('.result-snippet').text()).toBe(props.snippet);
  });
});