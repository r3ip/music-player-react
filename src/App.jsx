import { useEffect, useRef, useState } from 'react';
import { getTrack } from './soundcloud-api/soundcloud';

//components
import { Imagen } from './components/Imagen';
import { Progress } from './components/Progress';
import { Search } from './components/Search';
import { Footer } from './components/Footer';

//icons
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled, FaPlay, FaPause, IoMdVolumeHigh, BsFillVolumeMuteFill } from 'react-icons/all'

//styles
import './App.css'

function App() {

  const audioPlayer = useRef();
  const [music, setMusic] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgres] = useState(0);
  const [isMute, setIsMute] = useState(false);
  const [duration, setDuration] = useState('00 : 00');
  const [currentTime, setCurrentTime] = useState('00 : 00');

  useEffect(() => {
    setMusic(
      {
        title: 'Stream Gintama - Promesa a la Luna [Versión Completa]',
        thumbnail: './assets/images/cover01.jpg',
        download_url: './assets/music/Promesa-a-la-Luna.mp3'
      }
    );

  }, [])

  const play = () => {
    audioPlayer.current.play();
    setIsPlaying(true);
  }

  const pause = () => {
    audioPlayer.current.pause();
    setIsPlaying(false);
  }

  const volumenMute = (value) => {
    if(value.target.checked === true) {
      setIsMute(true)
    }else {
      //mute
      setIsMute(false)
    }
  }

  const timeUpdate = () => {
    let duration = audioPlayer.current.duration
    let minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration % 60);
    let durationTime = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    if( durationTime === 'NaN : NaN') setDuration('00 : 00');
    else setDuration(durationTime);
    
    let currentMin = Math.floor(audioPlayer.current.currentTime / 60);
    let currentSec = Math.floor(audioPlayer.current.currentTime % 60);
    let currentTime = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
    setCurrentTime(currentTime);

    const progress = parseInt((audioPlayer.current.currentTime / audioPlayer.current.duration) * 100);
    setProgres(isNaN(progress) ? 0 : progress)
  }

  return (
    <div className="App">
      {
        music.download_url !== undefined ?

          <div className=" mx-auto mt-10 card w-96 bg-base-100 shadow-xl">
            <div className="mx-auto mt-10">
              <audio src={music.download_url} ref={ audioPlayer } muted={ isMute } onTimeUpdate={ timeUpdate } ></audio>
              <Imagen urlImagen={music.thumbnail} urlDownload={music.download_url}/>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{music.title}</h2>
              <div className="flex justify-center space-x-2 my-5">
                <p>{ currentTime } - { duration }</p>
                <label className="swap swap-rotate">
                <input type="checkbox" onChange={ volumenMute }/>
                  <BsFillVolumeMuteFill className="swap-on fill-current text-secondary-focus w-6 h-6"/>
                  <IoMdVolumeHigh  BsFillVolumeMuteFill className="swap-off fill-current text-primary w-6 h-6"/>
                </label>
              </div>
              <Progress valueProgress={ progress } />
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
