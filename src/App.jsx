import { useEffect, useRef, useState } from 'react';
import { getTrack } from './soundcloud-api/soundcloud';

//components
import { Imagen } from './components/Imagen';
import { Progress } from './components/Progress';
import { Search } from './components/Search';
import { Footer } from './components/Footer';
import { Audios } from './components/Audio';

//icons
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled, FaPlay, FaPause } from 'react-icons/all'

//styles
import './App.css'

function App() {

  const audioPlayer = useRef();
  const [music, setMusic] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgres] = useState(0);

  useEffect(() => {
    const getMusic = getTrack('https://soundcloud.com/igstudiosmx/gintama-promesa-a-la-luna-version-completa');
    getMusic.then((res) => {
      setMusic(res.data.music);
    })

    // const volumePlayer = audioPlayer?.current?.volume;
    const duration = Math.floor(audioPlayer?.current?.duration);
    const currentTime = Math.floor(audioPlayer?.current?.currentTime);
    setDuration(duration);
    setProgres(currentTime);

  }, [])

  const play = () => {
    audioPlayer.current.playMusic();
    setIsPlaying(true);
  }

  const pause = () => {
    audioPlayer.current.pauseMusic();
    setIsPlaying(false);
  }

  const formatTime = (time) =>{

    if(time && !isNaN(time)) {
      const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
      const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60); 

      return `${minutes}:${seconds}`
    }

    return '00:00';
    
  }

  return (
    <div className="App">
      <Search />

      {
        music.download_url !== undefined ?

          <div className=" mx-auto mt-10 card w-96 bg-base-100 shadow-xl">
            <div className="mx-auto mt-10">
              {/* <audio src={music.download_url} ref={audioPlayer} ></audio> */}
              <Audios ref={audioPlayer} soundsList={music}></Audios>
              <Imagen urlImgen={music.thumbnail} />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{music.title}</h2>
              <p>{formatTime(progress)} - {formatTime(duration)}</p>
              <Progress valueProgress={45} />
              <div className="flex justify-center space-x-2 my-5">
                <button className="btn btn-outline btn-primary" disabled><TbPlayerTrackPrevFilled /></button>
                {isPlaying === false ?
                  <button className="btn btn-outline btn-primary" onClick={ () => play() } ><FaPlay /></button>
                  : <button className="btn btn-outline btn-primary" onClick={ () => pause() } ><FaPause /></button>
                }
                <button className="btn btn-outline btn-primary" disabled><TbPlayerTrackNextFilled /></button>
              </div>
            </div>
          </div>

          :
          <div className="flex justify-center space-x-2 my-80 container mx-auto">
            <progress className="progress w-24"></progress>
          </div>
      }

      <Footer />

    </div>
  )
}

export default App
