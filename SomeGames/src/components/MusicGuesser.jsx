import { useEffect, useState } from "react"
import SongServices from './services/songs'
import MusicPlayer from "./functions/MusicPlayer"
import SearchBar from "./Functions/SearchBar"
import SongResult from "./Functions/SongResult"


const MusicGuesser = ({ id }) => {
    // do most logic in ipod --> reuse for others/daily
    const [userGuess, setUserGuess] = useState("")
    const [allSong, setAllSong] = useState([])
    const [correctSong, setCorrectSong] = useState(null)
    const [selectedSong, setSelectedSong] = useState(null)
    const [allGuesses, setAllGuesses] = useState([])
    const [numGuesses, setNumGuesses] = useState(0)
    const [page, setPage] = useState('play')
    // const [filteredSongs = setFilteredSongs] = useState([])

    const playlist = `/playlist/${id}`

    useEffect(() => {
        SongServices
            .getAll(playlist)
            .then(returnedPlaylist => {
                const songsArr = returnedPlaylist.map(s => { return {  
                    id: s.id,
                    title: s.title,
                    artist: s.artist.name,
                    link: s.link,
                    preview: s.preview,
                    cover: s.album.cover_medium
                }})

                setAllSong(songsArr)
                pickSong(songsArr)
            })
    }, [])

    // useEffect(() => {
    //     pickSong()
    // }, [allSong]) // CHANGE THIS TO NEW GAME

    
    const pickSong = (songsArr) => {
        const song = songsArr[Math.floor(Math.random() * songsArr.length)]
        setCorrectSong(song)
    }

    const handleChangeGuess = (event) => {
        setUserGuess(event.target.value)
        // handleSongFilter()
    }

    const handleSelectingSong = (result) => {
        console.log(result)
        setSelectedSong(result)
        setUserGuess(`${result.title} - ${result.artist}`)
    }

    const filteredSongs = allSong.filter(s => 
        s.title?.toLowerCase().includes(userGuess.toLowerCase()) 
        || s.artist?.toLowerCase().includes(userGuess.toLowerCase())
    )

    const handleCompareGuess = () => {
        setAllGuesses([...allGuesses, selectedSong])

        if (selectedSong.id === correctSong.id) {
            setPage('win')
            console.log("win")
            // switch the view to show song
        }
        else {
            handleClear()
            handleAddingGuess()
        }
    }

    const handleClear = () => {
        setSelectedSong(null)
        setUserGuess("")
    }

    const handleAddingGuess = () => {
        setNumGuesses(numGuesses + 1)

        if (numGuesses >= 5) {
            setPage('lose')
            console.log("lose")
        }
    }

    const handleRestart = () => {
        setCorrectSong(null)
        pickSong(allSong)
        setPage('play')
        setAllGuesses([])
        setNumGuesses(0)
        handleClear()
    }

    
    if (correctSong == null) {
        return <div>Song loading...</div>
    }

    if (page === 'play') {
        return (
            <div>
                <MusicPlayer song={correctSong} numGuesses={numGuesses} handleAddingGuess={handleAddingGuess} />
                
                <form onSubmit={(event) => event.preventDefault()}>
                    <div>
                        {selectedSong ? <button onClick={handleClear}>X</button> : null}
                        <input placeholder="Search for song or artist..." value={userGuess}
                        onChange={handleChangeGuess} />
                        {selectedSong ? <button onClick={handleCompareGuess}>&gt;</button> : null}
                    </div>
                </form>
                <SearchBar songs={filteredSongs} userGuess={userGuess} handleSelectingSong={handleSelectingSong} />
                {/* // back button
                // title
                // 6 guesses
                // sound progress bar
                // import iPod template

                // if user hasn't guessed correctly/used all guesses
                // display GuessSong else display SongResult */}
            </div>
        )
    }
    else if (page === 'win' || page === 'lose') {
        return (
            <SongResult song={correctSong} replay={handleRestart} />
        )
    }
    else {
        return (
            <div>Error</div>
        )
    }
}



export default MusicGuesser