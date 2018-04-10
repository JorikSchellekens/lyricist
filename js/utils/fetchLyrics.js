import axios from 'axios';

import { AZLYRICS_TEMPLATE } from '../constants'
export const fetchAZLyrics = (metadata) => {
  const options = {
    method: 'GET',
    url: AZLYRICS_TEMPLATE(sandAZParams(metatdata)),
  };
  return axios(options);
}