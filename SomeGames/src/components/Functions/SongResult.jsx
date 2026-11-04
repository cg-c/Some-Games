

const SongResult = ({ song }) => {

    return (
        <div>
            <div>
                <p>{song.image}</p>
                <p>{song.title}</p>
                <p>{song.artist}</p>
            </div>

        </div>
    )
}


export default SongResult