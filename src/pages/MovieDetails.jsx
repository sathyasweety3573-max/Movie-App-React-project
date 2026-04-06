import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = async () => {
    const data = await fetchMovieDetails(id);
    setMovie(data);
  };

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 text-white">
      
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-72 rounded-lg shadow-lg"
      />

      <div>
        <h1 className="text-3xl font-bold mb-3">
          {movie.Title}
        </h1>

        <p className="text-gray-400 mb-2">
          {movie.Year} • {movie.Genre}
        </p>

        <p className="mt-4">
          {movie.Plot}
        </p>
      </div>

    </div>
  );
}

export default MovieDetails;