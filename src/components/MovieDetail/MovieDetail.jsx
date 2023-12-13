import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getMovieById, getStreamingForMovie } from "../../api/movies";
import Loading from "../Loading/Loading";
//import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import "./MovieDetail.css";

const MovieDetail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [streaming, setStreaming] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // Obtener el historial de navegación

  useEffect(() => {
    // Obtener detalles de la película
    getMovieById(id)
      .then((response) => {
        setMovie(response.data.movie);
        // Obtener información de streaming
        return getStreamingForMovie(id);
      })
      .then((response) => {
        setStreaming(response.data.streaming_entries);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const videoWidth = "100%";
  const videoHeight = window.innerWidth <= 768 ? "200px" : "600px";

  return (
    <div className="content-primary">
      <Link to="#" onClick={() => navigate(-1)} className="back-button">
        <svg
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1024 1024"
          className="back-icon"
        >
          <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
        </svg>
        <span>Ir atrás</span>
      </Link>

      <div className="content-detail">
        <div className="content-movie">
          <img
            src={movie.image}
            alt={movie.title}
            style={{
              maxWidth: "300px",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          />

          {streaming &&
            streaming.map((entry) => (
              <div key={entry.id} className="streaming-entry">
                <a
                  href={entry.url_video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  <img src={entry.url_icono} className="streaming-icon" />
                  Ver en streaming
                </a>
              </div>
            ))}
        </div>
        <div className="overview">
          <h1>
            {movie.title} ({movie.release_date})
          </h1>
          <p>
            <span className="genre">{movie.genre}</span>
          </p>
          <h2>Descripción general</h2>
          <p>{movie.review}</p>
          <p>
            Director: <span className="secondary">{movie.director}</span>
          </p>
          <hr />
          <p>
            Escritor: <span className="secondary">{movie.writer}</span>
          </p>
          <hr />
          <p>
            Editor: <span className="secondary">{movie.editor}</span>
          </p>
          <hr />
        </div>
      </div>
      <div className="video">
        <h2 className="resumen">Resumen</h2>
        <ReactPlayer
          url={movie.url[0]}
          width={videoWidth}
          height={videoHeight}
          controls={true}
          playing={false}
          muted={true}
          loop={true}
          className="video-player"
        />
      </div>
    </div>
  );
};

// Función para obtener el ID del video de YouTube desde la URL
// const getYouTubeVideoId = (url) => {
//   const match = url.match(
//     /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
//   );
//   return match && match[1];
// };

export default MovieDetail;
