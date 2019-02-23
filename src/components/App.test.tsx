import React                       from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App                         from './App';
import SearchBar                   from './SearchBar';

describe('App', () => {
  let app: ShallowWrapper;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('should have a header', () => {
    expect(app.containsMatchingElement(
      <header>
        <SearchBar />
      </header>
    )).toBe(true);
  });

  it('should have a main', () => {
    expect(app.containsMatchingElement(
      <main />
    )).toBe(true);
  });
});
