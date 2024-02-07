import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTM2Y2U5NDg4MjY2MWVjZmQ3NWQyYzIyZTg5MDVhYSIsInN1YiI6IjYzMzQ1NmYwZDQ2NTM3MDA4MmFhMzMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Yo7St9bT1yiAwYdr2Wq1_-3d7SD_Cu2hBotpJshr_I';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  params: {
    language: 'en-US',
  },
});

export const getTrendings = async () => {
  const response = await api.get('/trending/movie/day');
  return response.data;
};
