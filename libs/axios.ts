/* eslint-disable import/no-named-default */
import { default as mainAxios } from 'axios';

const axios = mainAxios.create({
  baseURL : "http://localhost:8000/",
});

export default axios;
