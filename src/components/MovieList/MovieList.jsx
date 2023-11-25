import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
      .then((response) => {
        // Actualizar el estado con los datos recibidos
        setMovies(response.data.movies);
        setFilteredMovies(response.data.movies);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de películas:", error);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="content">
      <Header onSearch={handleSearch} />
      <h2  className="list-title">Peliculas disponibles</h2>
      <div className="movie-container">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={movie.image}
                alt={movie.title}
                style={{ maxWidth: "260px" }}
                className="movie-image"
              />
            </Link>
            <div className="movie-details">
              <span className="movie-title">{movie.title}</span>
              <br />
              <span className="movie-editor">{movie.editor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
