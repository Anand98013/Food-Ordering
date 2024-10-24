import axios from 'axios';

export const API_URL = 'https://food-ordering-backend-production-c448.up.railway.app';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
