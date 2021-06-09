import axios from 'axios';

export const jabonarteApi = axios.create({
  baseURL: process.env.REACT_APP_REST_API,
});
