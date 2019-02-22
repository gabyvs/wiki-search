import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  background-color: rgba(236, 236, 236, 0.3);
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

const Main = styled.main`
  margin-top: 100px;
  overflow: auto;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
