import { useState } from "react";
import { addMovie } from "../../api/movies";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    review: "",
    url: "",
    cast: "",
    rating: "",
    genre: "",
    duration: "",
    director: "",
    writer: "",
    editor: "",
    release_date: "",
    trailer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addMovie(formData);
      console.log(response.data.message); // Mensaje de éxito
    } catch (error) {
      if (error.response) {
        // Error de respuesta del servidor
        console.error("Error al agregar película:", error.response.data);
      } else if (error.request) {
        // Error de la solicitud
        console.error("Error de solicitud al agregar película:", error.request);
      } else {
        // Otro tipo de error
        console.error("Error al agregar película:", error.message);
      }
    }
  };

  return (
    <div>
      <h1>Panel Administrativo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Imagen URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Reseña:
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          URL:
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Reparto:
          <input
            type="text"
            name="cast"
            value={formData.cast}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Género:
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Duración:
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Director:
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Escritor:
          <input
            type="text"
            name="writer"
            value={formData.writer}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Editor:
          <input
            type="text"
            name="editor"
            value={formData.editor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha de lanzamiento:
          <input
            type="text"
            name="release_date"
            value={formData.release_date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Trailer:
          <input
            type="text"
            name="trailer"
            value={formData.trailer}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Agregar Película</button>
      </form>
    </div>
  );
};

export default AdminPanel;
