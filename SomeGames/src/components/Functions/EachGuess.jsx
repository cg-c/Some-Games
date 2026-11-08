import { useEffect, useState } from "react"


const EachGuess = ({ song, correctSong }) => {
    const [logo, setLogo] = useState("X")

    useEffect(() => {
        handleLogo()
    }, [])

    const handleLogo = () => {
        if (song.artist === correctSong.artist) {
            setLogo("~")
        }
    }

    if (song === 'skipped') {
        return (
            <div>
                Skipped
                &emsp;&emsp;{logo}
            </div>
        )
    }

    return (
        <div>
            <div>{song.title} - {song.artist} 
                &emsp;&emsp;{logo}
            </div>
        </div>
    )
}

export default EachGuess