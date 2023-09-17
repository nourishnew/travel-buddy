import React from 'react';
import './searchbar.css';

const SearchBar = () => {
  return (
    <body>
    <div className="search-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
    </body>
  );
}

export default SearchBar;
