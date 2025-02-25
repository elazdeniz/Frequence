import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
    return (
        <div>
            <h1>Jammming</h1>
            <SearchBar />
            <div className="app-container">
                <SearchResults />
                <Playlist />
            </div>
        </div>
    );
}

export default App;
