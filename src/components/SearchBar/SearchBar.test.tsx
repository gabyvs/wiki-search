import React                         from "react";
import {
  shallow,
  ShallowWrapper }                   from "enzyme";
import SearchBar, { SearchBarProps } from "./SearchBar";

describe("SearchBar", () => {
  let searchBar: ShallowWrapper;

  beforeEach(() => {
    searchBar = shallow(<SearchBar />);
  });

  it('renders without crashing', () => {});

  it("renders correctly", () => {
    expect(searchBar).toMatchSnapshot();
  });

  it('displays empty input when called with empty term', () => {
    expect(searchBar.find('input').props().value).toEqual('');
  });

  describe('with props', () => {
    let props: SearchBarProps;

    beforeEach(() => {
      props = { searchTerm: 'searched term' };
      searchBar = shallow(<SearchBar {...props}/>);
    });

    it('displays term in input', () => {
      expect(searchBar.find('input').props().value).toEqual(props.searchTerm);
    });
  });
});
