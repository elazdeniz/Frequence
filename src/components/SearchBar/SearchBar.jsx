import React from 'react';
import Button from '../Button/Button'; // Import the button component

function SearchBar() {
    const handleSearch = () => {
        console.log('Searching...');
    };

    return (
        <div>
            <input type="text" placeholder="Search for tracks" />
            <Button label="Search" onClick={handleSearch} />
        </div>
    );
}

export default SearchBar;
