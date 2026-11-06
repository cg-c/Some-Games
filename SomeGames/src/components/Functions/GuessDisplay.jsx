import EachGuess from "./EachGuess"


const GuessDisplay = ({ guesses, correctSong }) => {

    if (guesses.length > 0) {
        return (
            <div>
                {guesses.map(g => {
                    return <EachGuess song={g} correctSong={correctSong} />
                })}
            </div>
        )
    }
}

export default GuessDisplay