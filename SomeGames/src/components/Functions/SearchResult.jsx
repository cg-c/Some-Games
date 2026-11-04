

const SearchResult = ({ result, handleSelectingSong }) => {

    const handleSelectResult = () => {
        handleSelectingSong(result)
    }

    return (
        <div className="searchResult" onClick={handleSelectResult}>
           {result.title} - {result.artist}
        </div>
    )
}

export default SearchResult 