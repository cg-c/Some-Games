

const SongResult = ({ song, replay }) => {

    return (
        <div>
            <div>
                <img src={song.cover} />
                <div>{song.title}</div>
                <div>{song.artist}</div>
            </div>
            <div>
                <button onClick={replay}>Replay</button>
            </div>
        </div>
    )
}


export default SongResult