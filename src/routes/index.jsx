import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import AdminPanel from "../components/AdminPanel/AdminPanel";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
