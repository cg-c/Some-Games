

const SearchResult = ({ result }) => {

    const handleSelectResult = () => {
        console.log(result)
        // auto fill --> change the guess --> on enter check id === id
    }

    return (
        <div className="searchResult" onClick={handleSelectResult}>
           {result.title} - {result.artist}
        </div>
    )
}

export default SearchResult 