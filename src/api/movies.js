import axios from 'axios';

export const getMovies = () => {
  return axios.get('https://api-movies-exam.onrender.com/movies');
};

export const getMovieById = (id) => {
  return axios.get(`https://api-movies-exam.onrender.com/movies/${id}`);
};