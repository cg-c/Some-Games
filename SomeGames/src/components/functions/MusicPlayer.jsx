// import {Howl, Howler} from 'howler'
import { use, useEffect, useRef, useState } from 'react'

const times = [10, 100, 300, 500, 1000, 1500]

const MusicPlayer = ({ song }) => {

    const [prog, setProg] = useState(0)
    const [currTime, setCurrTime] = useState(0)
    const [percent, setPercent] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const maxDur = times[times.length - 1]
    
    const audioPlayer = useRef()
    const progBar = useRef()
    const animationRef = useRef()
    


    useEffect(() => {
        if (currTime >= times[prog]) {
            stopSong()
            audioPlayer.current.currentTime = 0.0
            changePlayerTime()
        }

    }, [currTime])

    useEffect(() => {
        progBar.current.max = maxDur
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])


    const play = () => {
        if (isPlaying) {
            stopSong()
        }
        else {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(playingSong)
            setIsPlaying(true)
        }
    }

    const stopSong = () => {
        audioPlayer.current.pause()
        cancelAnimationFrame(animationRef.current)
        setIsPlaying(false)
    }

    const changePlayerTime = () => {
        progBar.current.style.setProperty('--seek-before-width', `${getPercent(progBar.current.value)}%`)
        setCurrTime(progBar.current.value)
    }

    const playingSong = () => {
        progBar.current.value = audioPlayer.current.currentTime * 100.00
        changePlayerTime()
        animationRef.current = requestAnimationFrame(playingSong)
    }

    const back = () => {
        stopSong()
        audioPlayer.current.currentTime = 0.0
        changePlayerTime()
        setCurrTime(progBar.current.value)
        animationRef.current = requestAnimationFrame(playingSong)
    }

    const next = () => {
        setIsPlaying(false)

        if (prog + 1 >= times.length) {
            // GIVE UP SCREEN
            console.log('lose')
        }
        else {
            setProg(prog + 1)
            

            if (!isPlaying) {
                audioPlayer.current.currentTime = times[prog] / 100.00
                changePlayerTime()
                setCurrTime(progBar.current.value)
            }
            
            console.log(times[prog]) // DELETE
        }
    }

    const handleSeek = () => {
        audioPlayer.current.currentTime = progBar.current.value / 100.00
        changePlayerTime()
        setCurrTime(progBar.current.value)
        // console.log(progBar.current.value)
        // console.log(audioPlayer.current.currentTime)
    }

    // const timeUpdater = (event) => {
    //     //setcurrtime
    //     //setpercentage
    // }

    const getPercent = (time) => {
        return Math.round((time / maxDur * 100))
    }

    return(
        <div>
            <div>
                <audio 
                    ref={audioPlayer} 
                    src={song.preview} 
                    preload='metadata' 
                    type='audio/mpeg' 
                    crossOrigin="anonymous" />
                <div className='progressBar'>
                    <input 
                        type='range'
                        defaultValue='0'
                        // min='0'
                        // value={currTime}
                        ref={progBar}
                        onChange={handleSeek}
                    />
                </div>
                <div className='songButtons'>
                    <button onClick={back}>back</button>
                    <button onClick={play}>play/pause</button>
                    <button onClick={next}>next</button>
                </div>
                
            </div>
        </div>
    )

}


export default MusicPlayer