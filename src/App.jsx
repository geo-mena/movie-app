import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
