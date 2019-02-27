import React  from 'react';
import './SearchBar.css';

const styles = {
  button: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '4.4rem',
    height: '4.4rem',
    border: 'none',
  },
  form: {
    marginLeft: '3rem',
    display: 'flex',
    border: '1px solid #242424',
    borderRadius: '4px'
  },
  icon: {
    color: 'white'
  },
  input: {
    backgroundColor: '#292929',
    border: 'none',
    height: '4.4rem',
    width: '55rem',
    padding: '.5rem 1rem',
    color: 'white',
  },
  logo: {
    fontWeight: "normal" as "normal"
  }
};

const SearchBar = () => (
  <>
    <h1 title="WikiSearch"><i style={styles.logo} className="fab fa-wikipedia-w" /></h1>
    <form style={styles.form}>
      <input type="search" style={styles.input}/>
      <button type="submit" style={styles.button} className="search-bar-icon-button">
        <i className="fas fa-search" style={styles.icon}/>
      </button>
      <button type="button" style={styles.button} className="search-bar-icon-button">
        <i className="fas fa-random" style={styles.icon}/>
      </button>
    </form>
  </>
);

export default SearchBar;