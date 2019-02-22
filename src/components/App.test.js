import React from 'react';
import { shallow }  from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import App, { Header, Main }          from './App';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('should have a header', () => {
    console.log(app);
    expect(enzymeFind(app, Header).exists()).toBe(true);
  });
});
