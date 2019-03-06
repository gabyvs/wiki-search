import React               from 'react';
import {
  shallow,
  ShallowWrapper }         from 'enzyme';
import List, { ListProps } from './List';

const sampleData = [
  {
    "ns":0,
    "title":"Nelson Mandela",
    "pageid":21492751,
    "size":196470,
    "wordcount":23732,
    "snippet":"Nelson Rolihlahla <span class=\"searchmatch\">Mandela</span> (/mænˈdɛlə/; Xhosa: [xolíɬaɬa <span class=\"searchmatch\">mandɛ̂ːla</span>]; 18 July 1918 – 5 December 2013) was a South African anti-apartheid revolutionary,",
    "timestamp":"2019-02-17T16:34:58Z"
  },
  {
    "ns":0,
    "title":"Winnie Madikizela-Mandela",
    "pageid":33683,
    "size":68864,
    "wordcount":6180,
    "snippet":"Winnie Madikizela-<span class=\"searchmatch\">Mandela</span> OLS MP (born Nomzamo Winifred Zanyiwe Madikizela; 26 September 1936 – 2 April 2018), also known as Winnie <span class=\"searchmatch\">Mandela</span>, was a South African",
    "timestamp":"2019-01-21T06:25:19Z"
  }
];

describe('List (empty)', () => {
  let list: ShallowWrapper;

  beforeEach(() => {
    list = shallow(<List results={[]}/>);
  });

  it('renders correctly', () => {
    expect(list).toMatchSnapshot();
  })
});

describe('List', () => {
  let list: ShallowWrapper;
  let props: ListProps;

  beforeEach(() => {
    props = { results: sampleData };
    list = shallow(<List {...props}/>);
  });

  it('renders correctly', () => {
    expect(list).toMatchSnapshot();
  })
});