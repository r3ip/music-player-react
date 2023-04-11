import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { Audios } from './components/Audio'
import './index.css'

const sound = 'https://soundcloud.com/igstudiosmx/gintama-promesa-a-la-luna-version-completa'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Audios action='addPlaylist' soundsList={sound}/> */}
  </React.StrictMode>,
)
