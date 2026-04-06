function MovieCard() {
  return (
    <div className="w-48 bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      
      <img
        className="w-full h-64 object-cover"
        src="https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
        alt="movie"
      />

      <div className="p-3">
        <h2 className="text-white text-lg font-semibold">Batman</h2>
        <p className="text-gray-400 text-sm">2022</p>
      </div>

    </div>
  );
}

export default MovieCard;