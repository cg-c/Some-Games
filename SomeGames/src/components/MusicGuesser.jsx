import { useEffect, useState } from "react"
import SongServices from './services/songs'
import MusicPlayer from "./functions/MusicPlayer"

const HolliPlaylist = "/playlist/15698151261"


const MusicGuesser = () => {

    // do most logic in ipod --> reuse for others/daily
    const [userGuess, setUserGuess] = useState("")
    const [allSong, setAllSong] = useState([])
    const [correctSong, setCorrectSong] = useState(null)

    useEffect(() => {
        SongServices
            .getAll(HolliPlaylist)
            .then(returnedPlaylist => {
                const songsArr = returnedPlaylist.data.map(s => { return {  
                    id: s.id,
                    title: s.title,
                    artist: s.artist.name,
                    link: s.link,
                    preview: s.preview
                }})

                setAllSong(songsArr)
            })
        pickSong()
    }, [])

    useEffect(() => {
        pickSong()
    }, [allSong]) // CHANGE THIS TO NEW GAME

    
    const pickSong = (event) => {
        const song = allSong[Math.floor(Math.random() * allSong.length)]
        setCorrectSong(song)
    }

    const handleChangeGuess = (event) => {
        setUserGuess(event.target.value)
    }

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