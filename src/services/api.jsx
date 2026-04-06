const API_KEY = "fcc11d8e";

export const fetchMovies = async (search) => {
  const res = await fetch(
    `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
  );
  return res.json();
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );
  return res.json();
};