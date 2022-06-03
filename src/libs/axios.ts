import mainAxios from 'axios';
import { BACKEND_URL } from 'app/config';

const axios = mainAxios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axios;
