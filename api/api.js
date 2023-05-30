import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://tinder-api-1osi.onrender.com/api',
});