import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-neutral-800 text-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold tracking-wide">
          <span className="text-blue-500">Blog</span>Verse
        </Link>


        <nav className="hidden md:flex space-x-6 items-center">
          <Link className="text-gray-200 hover:text-gray-300 text-lg" to="/recentposts">Recent Posts</Link>
          <Link className="text-gray-200 hover:text-gray-300 text-lg" to="/howitwork">How it works</Link>
          <Link to="/login">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white transition duration-200 cursor-pointer">
              Login
            </button>
          </Link>
        </nav>


        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-neutral-800 px-4 pb-4 pt-2 space-y-3">
          <Link
            onClick={() => setMenuOpen(false)}
            className="block text-center text-gray-200 hover:text-gray-100 text-lg"
            to="/recentposts"
          >
            Recent Posts
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="block text-center text-gray-200 hover:text-gray-100 text-lg"
            to="/howitwork"
          >
            How it works
          </Link>
          <Link to="/login" className="block text-center" onClick={() => setMenuOpen(false)}>
            <button className="w-full max-w-xs mx-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200">
              Login
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
