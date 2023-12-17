import React from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";
import Router from "./routes/index";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <Router />;
}

export default App;
