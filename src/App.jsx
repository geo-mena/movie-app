import React from "react";
import "./App.css";
// import MovieList from "./components/MovieList/MovieList";
// import MovieDetail from "./components/MovieDetail/MovieDetail";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import Router from "./routes/index";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simular una carga de 2 segundos
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <Router />;
}

export default App;
