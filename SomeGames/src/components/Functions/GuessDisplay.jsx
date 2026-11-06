

const GuessDisplay = ({ guesses, correctSong }) => {

    if (guesses.length > 0) {
        return (
            <div>
                {guesses.map(g => {
                    return <div>{g.title} - {g.artist}</div>
                })}
            </div>
        )
    }
}

export default GuessDisplay