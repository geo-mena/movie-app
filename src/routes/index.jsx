import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import MovieDetail from "../components/MovieDetail/MovieDetail";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
