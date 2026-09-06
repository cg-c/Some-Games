

const SearchBar = ({allSongs}) => {

    return (
        <div>
            {allSongs.map(s => 
                <p>{s.title} {s.artist.name}</p>
            )}
        </div>
    )

}

export default SearchBar