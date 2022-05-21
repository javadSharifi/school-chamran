/* eslint-disable import/no-named-default */
import { default as mainAxios } from 'axios';

const axios = mainAxios.create({
  baseURL : process.env.BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axios;
