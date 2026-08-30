import { useEffect, useState } from "react"
import axios from "axios"
import SongServices from './services/songs'

const HolliPlaylist = "/playlist/15698151261"

const GuessSong = () => {
    return (
        <div>

        </div>
    )
}


const MusicGuesser = () => {

    // api calls here
    // do most logic in ipod --> reuse for others/daily
    const [userGuess, setUserGuess] = useState("")
    const [allSong, setAllSong] = useState([])
    const [correctSongID, setCorrectSongID] = ("")

    useEffect(() => {
        SongServices
            .getAll(HolliPlaylist)
            .then(returnedPlaylist => {
                const songsArr = returnedPlaylist.data.map(s => { return {  
                    id: s.id,
                    title: s.title,
                    artist: s.artist.name
                }})

                setAllSong(songsArr)
            })
    }, [])



    const pickSong = (event) => {

    }

    const handleChangeGuess = (event) => {
        setUserGuess(event.target.value)
    }

    return (
        <div>
            <form onSubmit={(event) => event.preventDefault()}>
                <div>
                    guess <input value={userGuess}
                    onChange={handleChangeGuess} />
                </div>
            </form>
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