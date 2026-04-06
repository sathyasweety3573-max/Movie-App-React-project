function SearchBar() {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-72 px-4 py-2 border rounded-l-lg"
      />
      <button className="px-4 py-2 bg-red-500 text-white rounded-r-lg">
        Search
      </button>
    </div>
  );
}

export default SearchBar;