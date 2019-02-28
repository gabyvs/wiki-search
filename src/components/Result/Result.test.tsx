import React        from 'react';
import {
  shallow,
  ShallowWrapper }  from 'enzyme';
import Result       from './Result';
import { IResult }  from '../../domain/result';

describe('Result', () => {
  let result: ShallowWrapper;
  let props: IResult;
  let url: string;

  beforeEach(() => {
    props = {
      title: 'A title for the result',
      snippet: 'This would be a description for the result.'
    };
    url = encodeURI(`https://en.wikipedia.org/wiki/${props.title}`)
    result = shallow(<Result {...props} />)
  });

  it('renders without crashing', () => {});

  it('renders correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('renders links with the passed url', () => {
    expect(result.find(`[href="${url}"]`)).toHaveLength(2);
  });

  it('renders title', () => {
    expect(result.find('a').at(0).text()).toBe(props.title);
  });

  it('renders url', () => {
    expect(result.find('a').at(1).text()).toBe(url);
  });

  it('renders snippet', () => {
    expect(result.find('.snippet').text()).toBe(props.snippet);
  });
});