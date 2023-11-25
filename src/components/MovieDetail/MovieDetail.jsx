import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";
import "./MovieDetail.css";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies/${id}`)
      .then((response) => {
        // Actualizar el estado con los datos recibidos
        setMovie(response.data.movie);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles de la película:", error);
      });
  }, [id]);

  if (!movie) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="content-primary">
      <div className="content-detail">
        <img
          src={movie.image}
          alt={movie.title}
          style={{ maxWidth: "300px" }}
        />
        <div className="overview">
          <h1>{movie.title}</h1>
          <p>
            <span className="genre">{movie.genre}</span>
          </p>
          <h3>Descripción general</h3>
          <p>{movie.review}</p>
          <span>
            {" "}
            <b>Director:</b> {movie.director}{" "}
          </span>
          <hr />
          <span>
            {" "}
            <b>Escritor:</b> {movie.writer}{" "}
          </span>
          <hr />
          <span>
            {" "}
            <b>Editor:</b> {movie.editor}{" "}
          </span>
          <hr />
        </div>
      </div>
      <div className="video">
        <YouTube videoId={getYouTubeVideoId(movie.url[0])} />
      </div>
    </div>
  );
};

// Función para obtener el ID del video de YouTube desde la URL
const getYouTubeVideoId = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match && match[1];
};

export default MovieDetail;
