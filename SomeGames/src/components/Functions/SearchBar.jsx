import SearchResult from "./SearchResult"


const SearchBar = ({ songs, userGuess, handleSelectingSong }) => {
    if (userGuess.length > 0) {
        return ( 
            <div className="searchBar">
                {songs.map(s => {
                    return <SearchResult result={s} key={s.id} handleSelectingSong={handleSelectingSong} />
                })}
            </div>
        )
    }
}

export default SearchBar