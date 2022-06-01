import mainAxios from 'axios';
import { BACKEND_URL } from 'app/config';

const axios = mainAxios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axios;
