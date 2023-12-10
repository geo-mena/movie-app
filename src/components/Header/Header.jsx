import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    // Verificar si la tecla presionada es "Enter"
    if (e.key === "Enter") {
      // Realizar la búsqueda
      onSearch(searchTerm);
    }
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="main-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <h2 className="logo">En minutos</h2>
        </Link>
        <div className="group">
          <svg
            className="icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="#777"
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            placeholder="Buscar película..."
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            className="input search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
