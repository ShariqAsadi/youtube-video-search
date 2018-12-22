import axios from 'axios';

const KEY = 'AIzaSyAsWS5cZBojNhCmrLSXN3Cfj0d4JXHBnA4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});
