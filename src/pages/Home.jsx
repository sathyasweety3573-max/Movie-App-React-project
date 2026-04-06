import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div>
      <SearchBar />

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default Home;