import "./App.css";
import React from "react";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Header from "./components/Header/Header";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MovieList/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
