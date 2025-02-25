import React from 'react';
import Button from '../Button/Button'; // Import the button component

function Playlist() {
    const handleSave = () => {
        console.log('Saving to Spotify...');
    };

    return (
        <div>
            <h2>My Playlist</h2>
            <Button label="Save to Spotify" onClick={handleSave} />
        </div>
    );
}

export default Playlist;
