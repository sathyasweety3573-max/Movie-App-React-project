import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-lg">
      <div className="flex flex-col items-center py-4">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white tracking-widest mb-3">
          🎬 MovieApp
        </h1>

        {/* Links */}
        <div className="flex gap-6">
          <Link 
            to="/" 
            className="text-white px-4 py-2 rounded-full hover:bg-red-500 hover:scale-105 transition duration-300"
          >
            Home
          </Link>

          <Link 
            to="/favorites" 
            className="text-white px-4 py-2 rounded-full hover:bg-red-500 hover:scale-105 transition duration-300"
          >
            Favorites
          </Link>

          <Link 
            to="/login" 
            className="text-white px-4 py-2 rounded-full hover:bg-red-500 hover:scale-105 transition duration-300"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;