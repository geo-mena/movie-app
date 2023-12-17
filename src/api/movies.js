import axios from 'axios';

// API para obtener todas las películas
export const getMovies = () => {
  return axios.get('https://api-movies-exam.onrender.com/movies');
};

// API para obtener una película por su id
export const getMovieById = (id) => {
  return axios.get(`https://api-movies-exam.onrender.com/movies/${id}`);
};

// API para obtener los streaming de una película
export const getStreamingForMovie = (movieId) => {
  return axios.get(`https://api-movies-exam.onrender.com/movies/${movieId}/streaming`);
};

// API para obtener los géneros de una película
export function getMoviesByGenre(genre) {
  return fetch(`https://api-movies-exam.onrender.com/movies/genre?genre=${encodeURIComponent(genre)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data.movies);
}