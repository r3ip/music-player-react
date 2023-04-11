import { useEffect, forwardRef, useImperativeHandle, useRef, useState } from 'react';

export const Audios = forwardRef( function Audios({soundsList}, ref) {
  const audioPlayer = useRef();
  const [sounds, setSounds] = useState({});

  useImperativeHandle(ref, () => {
    return {
      playMusic() {
        audioPlayer.current.play();
      },
      pauseMusic() {
        audioPlayer.current.pause();
      },
    };
  }, []);
  
  useEffect( ()=> {
    setSounds(soundsList)

    // if(action === 'addPlaylist'){
    //   addPlayList(soundsList);
    // }
  }, [])

  // const addPlayList = (soundsList) =>{
  //   if(soundsList){
  //     const getMusic = getTrack(soundsList);
  //     getMusic.then((res) => {
  //       const music = res.data.music
  //       const encontrar = sounds.find(x => x.title === music.title)
  //       console.log(encontrar)
  //       if(!encontrar){
  //         setSounds(all =>[...all, music]);
  //       }
  //     })
  //   }
  // }

  return (
    <div>
      <audio ref={audioPlayer} src={sounds.download_url}></audio>
    </div>
  )
})
