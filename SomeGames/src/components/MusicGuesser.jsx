import { useEffect, useState } from "react"
import SongServices from './services/songs'
import MusicPlayer from "./functions/MusicPlayer"
import SearchBar from "./Functions/SearchBar"


const MusicGuesser = ({ id }) => {
    // do most logic in ipod --> reuse for others/daily
    const [userGuess, setUserGuess] = useState("")
    const [allSong, setAllSong] = useState([])
    const [correctSong, setCorrectSong] = useState(null)
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


    // const handleSongFilter = () => {
    //     const filter = allSong.filter(s => {
    //         s.title.toLowerCase().includes(userGuess.toLowerCase()) 
    //     })

    //     setFilteredSongs(filter)
    // }

    
    const filteredSongs = allSong.filter(s => 
        s.title?.toLowerCase().includes(userGuess.toLowerCase()) 
        || s.artist?.toLowerCase().includes(userGuess.toLowerCase())
    )

    // const reload = (event) => { // REDO
    //     pickSong()
    // }

    
    if (correctSong == null) {
        return <div>Song loading...</div>
    }

    return (
        <div>
            <MusicPlayer song={correctSong} />
            
            <form onSubmit={(event) => event.preventDefault()}>
                <div>
                    <input placeholder="Search for song or artist..." value={userGuess}
                    onChange={handleChangeGuess} />
                </div>
            </form>
            <SearchBar songs={filteredSongs} userGuess={userGuess} />
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



export default MusicGuesser