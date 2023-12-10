import axios from 'axios';

export const getMovies = () => {
  return axios.get('https://api-movies-m9vp.onrender.com/movies');
};

export const getMovieById = (id) => {
  return axios.get(`https://api-movies-m9vp.onrender.com/movies/${id}`);
};