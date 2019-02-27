import React  from 'react';
import './SearchBar.css';

export interface SearchBarProps {
  searchTerm?: string;
}

const SearchBar = ({ searchTerm = '' }: SearchBarProps) => {
  return (
    <>
      <h1 title="WikiSearch">
        <i className="fab fa-wikipedia-w search-bar-logo" />
      </h1>
      <form className="search-bar-form">
        <input type="search" className="search-bar-input" value={searchTerm}/>
        <button type="submit" className="search-bar-button">
          <i className="fas fa-search search-bar-button-icon"/>
        </button>
        <button type="button" className="search-bar-button">
          <i className="fas fa-random search-bar-button-icon"/>
        </button>
      </form>
    </>
  );
};

export default SearchBar;