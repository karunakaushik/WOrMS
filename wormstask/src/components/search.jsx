import React from 'react';
import '../styles/search.css'
const SearchBar = (props) => {
    const {searchTerm, onSearchChange} =props
    return (
        <>
        <span>Search : </span>
        <input className='searchBox'
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={onSearchChange}
        />
     </>
    );
};

export default SearchBar;
