import React, { Component } from 'react';
import styled               from 'styled-components';
import SearchBar            from './SearchBar';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10rem;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  background-color: rgba(236, 236, 236, 0.3);
  display: flex;
  align-items: center;
  padding-left: 5rem;
`;

export const Main = styled.main`
  margin-top: 10rem;
  overflow: auto;
`;

class App extends Component {
  render() {
    return (
      <>
        <Header>
          <SearchBar />
        </Header>
        <Main />
      </>
    );
  }
}

export default App;
