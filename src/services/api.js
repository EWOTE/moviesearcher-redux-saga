import axios from 'axios';
const API_ROOT = 'https://api.themoviedb.org/3';
const API_KEY = 'f18734e6c36b636ad92f612ecfa5358e';

const callApi = (endpoint, params = '') => {
  return axios(
    `${API_ROOT}${endpoint}?api_key=${API_KEY}&language=ru-RU&${params}`
  );
};

export const fetchGenres = () => callApi(`/genre/movie/list`);
export const fetchTopMovies = page =>
  callApi(`/movie/top_rated`, `page=${page}`);
export const fetchMoviesByQuery = (query, page) =>
  callApi(`/search/movie`, `query=${query}&page=${page}`);
export const fetchMovieDetail = id =>
  callApi(`/movie/${id}`, 'append_to_response=credits');
