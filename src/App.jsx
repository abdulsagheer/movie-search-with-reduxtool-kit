import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {
  return (
    <div className="App">
      <h1>Movie App with Redux Toolkit Saga</h1>
      <Link to="/">Home</Link>
      <Link to="/movie/:id">Movie</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
