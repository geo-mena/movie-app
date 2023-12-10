import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

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

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="content">
      <Header onSearch={handleSearch} />
      <h2 className="list-title">Películas disponibles</h2>
      <div className="movie-container">
        {currentMovies.map((movie) => (
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
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        {Array.from({
          length: Math.ceil(filteredMovies.length / moviesPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(filteredMovies.length / moviesPerPage)
          }
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default MovieList;
