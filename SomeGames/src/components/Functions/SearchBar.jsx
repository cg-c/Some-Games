import SearchResult from "./SearchResult"


const SearchBar = ({ songs, userGuess }) => {
    if (userGuess.length > 0) {
        return ( // filter based on user's guess from song name, then artist --> map
            <div className="searchBar">
                {songs.map(s => {
                    return <SearchResult result={s} key={s.id} />
                })}
            </div>
        )
    }
}

export default SearchBar