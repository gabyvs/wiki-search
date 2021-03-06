import React       from 'react';
import {
  shallow,
  ShallowWrapper } from 'enzyme';
import App         from './App';

describe('App', () => {
  let app: ShallowWrapper;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders without crashing', () => {});

  xit('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
