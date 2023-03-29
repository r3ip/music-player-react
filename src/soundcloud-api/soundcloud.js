import axios from 'axios';

const baseURL = 'https://soundcloud-downloader4.p.rapidapi.com/soundcloud/track';

export const getTrack = async (url) => {
  if (url) {
    return await axios.get(baseURL, {
      params: { url },
      headers: {
        'X-RapidAPI-Key': 'e64ce416dbmsh9e1f7241758196fp1d1f57jsnd4811e657d95',
        'X-RapidAPI-Host': 'soundcloud-downloader4.p.rapidapi.com'
      }
    })
  }
}
