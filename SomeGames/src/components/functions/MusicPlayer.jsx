import {Howl, Howler} from 'howler'
import { useEffect, useState } from 'react'

const times = [100, 1000, 3000, 5000, 10000, 15000]

const MusicPlayer = ({ song }) => {

    const [prog, setProg] = useState(0)
    const [currTime, setCurrTime] = useState(0)
    console.log(song)

    useEffect(() => {
        if (currTime >= times[prog]) {
            sound.stop()
        }
    }, [currTime])

    const sound = new Howl({
        src: [song.preview],
        html5: true,
        format: ['mp3'],
    })


    const play = () => {
        if (sound.playing()) {
            sound.pause()
        }
        else {
            sound.play();
        }
    }

    const back = () => {
        sound.stop()
        sound.seek(0)
        console.log('return') // DELETE
        // ADD VISUALS ON BAR
    }

    const next = () => {
        // MAKE IT UNLOCK THE NEXT SECTION
        sound.stop()

        if (prog + 1 >= times.length) {
            // GIVE UP SCREEN
            console.log('lose')
        }
        else {
            setProg(prog + 1)
            sound.seek(times[prog]) //DOESN'T WORK
            console.log(times[prog]) // DELETE
            // sound.play()
        }
    }

    const handleSeek = (event) => {
        setCurrTime(sound.seek())
    }

    return(
        <div>
            <div className='progressBar'>
                <input 
                    type='range'
                    min='0'
                    max={times[prog]}
                    value={currTime}
                    onChange={handleSeek}
                />
                
            </div>
            <div>
                <button onClick={back}>back</button>
                <button onClick={play}>play/pause</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    )

}


export default MusicPlayer