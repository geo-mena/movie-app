import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { getMovies } from "../../api/movies";
import Loading from "../Loading/Loading";
import "./MovieList.css";
import Footer from "../Footer/Footer";
import Rating from "../Rating/Rating";

const MovieList = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieNotFound, setMovieNotFound] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

  useEffect(() => {
    getMovies()
      .then((response) => {
        setMovies(response.data.movies);
        setFilteredMovies(response.data.movies);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de películas:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleSearch = (query) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    if (filtered.length === 0) {
      setMovieNotFound(true);
      setFilteredMovies([]);
    } else {
      setMovieNotFound(false);
      setFilteredMovies(filtered);
    }
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
              <div className="movie-image-container">
                <img
                  src={movie.image}
                  alt={movie.title}
                  style={{ maxWidth: "260px" }}
                  className="movie-image"
                />
                <Rating className="rating-circle" rating={movie.rating} />
              </div>
            </Link>
            <div className="movie-details" style={{ maxWidth: "200px" }}>
              <span
                className="movie-title"
                style={{
                  wordWrap: "break-word",
                }}
              >
                {movie.title}
              </span>
              <span> ({movie.release_date})</span>
              <br />
              <span className="movie-editor">{movie.editor}</span>
            </div>
          </div>
        ))}
      </div>
      {movieNotFound && (
        <p className="not-found">
          No se encontraron <span className="not-found-span">películas!</span>
        </p>
      )}
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
      <Footer />
    </div>
  );
};

export default MovieList;
