import axios from 'axios';
import { sandAZParams } from './sandSongTitle';
import { AZLYRICS_TEMPLATE } from '../constants'

export const fetchAZLyrics = (metadata) => {
  const options = {
    method: 'GET',
    url: AZLYRICS_TEMPLATE(sandAZParams(metadata)),
  };
  return axios(options);
}