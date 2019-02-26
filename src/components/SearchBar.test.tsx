import React        from "react";
import {
  shallow,
  ShallowWrapper }  from "enzyme";
import SearchBar    from "./SearchBar";

describe("SearchBar", () => {
  let searchBar: ShallowWrapper;

  beforeEach(() => {
    searchBar = shallow(<SearchBar />);
  });

  it('renders without crashing', () => {});

  it("renders correctly", () => {
    expect(searchBar).toMatchSnapshot();
  });
});
