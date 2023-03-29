import { useEffect, useState } from 'react';

//components
import { Imagen } from './components/Imagen';
import { AudioPlayer } from './components/AuidoPlayer';
import { Progress } from './components/Progress';
import { Search } from './components/Search';
import { Footer } from './components/Footer';

//icons
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled, FaPlay, FaPause } from 'react-icons/all'

//styles
import './App.css'
import { getTrack } from './soundcloud-api/soundcloud';

function App() {

  const [music, setMusic] = useState({});
  const [playPause, setPlayPause] = useState(false)
  // const [musicPlay, setMusicPlay] = useState(0);
  // const [progress, setProgres] = useState(0);
  useEffect(() => {
    const getMusic = getTrack('https://soundcloud.com/igstudiosmx/gintama-promesa-a-la-luna-version-completa')
    getMusic.then((res) => {
      setMusic(res.data.music)
    })
  }, [])

  const play = () => {
    const audioPlay = document.getElementById('audio');
    audioPlay.play()

    setPlayPause(true);
    currentTime()
  }

  const pause = () => {
    const audioPause = document.getElementById('audio');
    audioPause.pause()

    setPlayPause(false);
  }

  // const currentTime = () =>{
  //   const audio = document.getElementById('audio');
  //   const currentTime = audio.currentTime();
  //   const duration = audio.duration();
  //   let porcetaje = (currentTime / duration) * 100
  //   console({currentTime, duration, porcetaje})
  //   setProgres(currentTime)
  // }

  // const next = () => {
  //   const countMusic = music.length
  //   if(musicPlay < countMusic) setMusicPlay(musicPlay +1)
  // }

  // const prev = () => {
  //   if(musicPlay > 0) setMusicPlay(musicPlay -1)
  // }

  return (
    <div className="App">
      <Search />

      {
        music.download_url !== undefined ?

          <div className=" mx-auto mt-10 card w-96 bg-base-100 shadow-xl">
            <div className="mx-auto mt-10">
              <AudioPlayer musicUrl={music.download_url} />
              <Imagen urlImgen={music.thumbnail} />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{music.title}</h2>
              <p>01:45 - 03:15</p>
              <Progress valueProgress={45} />
              <div className="flex justify-center space-x-2 my-5">
                <button className="btn btn-outline btn-primary" disabled><TbPlayerTrackPrevFilled /></button>
                {playPause === false ?
                  <button className="btn btn-outline btn-primary" onClick={play} ><FaPlay /></button>
                  : <button className="btn btn-outline btn-primary" onClick={pause} ><FaPause /></button>
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
