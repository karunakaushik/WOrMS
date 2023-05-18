import React, { useState } from 'react';

const SearchBar = (props) => {
    const {searchTerm, onSearchChange} =props
    return (
        <>
        <span>Search : </span>
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={onSearchChange}
        />
     </>
    );
};

export default SearchBar;
