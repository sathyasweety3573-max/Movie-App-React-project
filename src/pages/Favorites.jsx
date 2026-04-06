import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fav")) || [];
    setMovies(data);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
      {movies.map((m, i) => (
        <MovieCard key={i} movie={m} />
      ))}
    </div>
  );
}

export default Favorites;