import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative w-full h-16 md:h-20 flex justify-between items-center px-4 md:px-8 lg:px-16 bg-transparent backdrop-blur-md border-b border-yellow-500/20 text-amber-100">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl md:text-4xl">🪶</span>

        <div>
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold font-cinzel">
            CraftyCraft AI
          </h1>

          <p className="hidden md:block text-sm text-gray-300">
            Where your imagination blooms
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-300">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition duration-300" >
            Home
          </Link>
        </li>

        <li>
          <Link to="/stories" className="hover:text-yellow-400 transition duration-300">
            My Stories
          </Link>
        </li>

        <li>
          <Link to="/create" className="hover:text-yellow-400 transition duration-300">
            Create
          </Link>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="w-10 h-10 rounded-full bg-black/20 border border-yellow-500/20 hover:border-yellow-400 transition">
          🌙
        </button>

        <button className="bg-violet-600 hover:bg-violet-500 transition px-5 py-2 rounded-lg font-semibold">
          Sign In
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-950/95 backdrop-blur-md border-t border-yellow-500/20 md:hidden">

          <ul className="flex flex-col items-center gap-6 py-8 text-lg text-gray-300">

            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/stories"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                My Stories
              </Link>
            </li>

            <li>
              <Link
                to="/create"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Create
              </Link>
            </li>

            <button className="w-10 h-10 rounded-full bg-black/20 border border-yellow-500/20">
              🌙
            </button>

            <button className="bg-violet-600 hover:bg-violet-500 px-6 py-2 rounded-lg font-semibold">
              Sign In
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;