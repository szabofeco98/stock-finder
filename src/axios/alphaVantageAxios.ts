import axios from 'axios';

export const alphaVintageApi = axios.create({
  baseURL: 'https://www.alphavantage.co/query',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  params: {
    apikey: process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY,
  },
});
