import axios from 'axios';

export const API_URL =
  process.env.NODE_ENV === 'dev'
    ? 'https://food-ordering-backend-production-b900.up.railway.app/'
    : 'http://localhost:8080';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
