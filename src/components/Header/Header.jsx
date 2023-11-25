import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="main-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <h2 className="logo">Movie Sumary</h2>
        </Link>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar películas por nombre"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
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
