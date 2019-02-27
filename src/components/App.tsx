import React     from 'react';
import SearchBar from './SearchBar';
import Result    from './Result';

const styles = {
  header: {
    top: 0,
    width: '100%',
    height: '10rem',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
    backgroundColor: 'rgba(236, 236, 236, 0.3)',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '5rem',
    position: 'fixed' as 'fixed'
  },
  main: {
    marginTop: "10rem",
    overflow: "auto",
  }
};

const App = () => (
  <>
    <header style={styles.header}>
      <SearchBar />
    </header>
    <main style={styles.main}>
      <Result
        url="www.rei.com"
        title="Go to the wilderness"
        snippet="This summer experience the backcountry in the company of your beloved friends."/>
    </main>
  </>
);

export default App;
