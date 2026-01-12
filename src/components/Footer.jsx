import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t bg-[#FFF5F0]">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        {/* Brand */}
        <h2 className="text-2xl font-bold text-red-500 font-gilroy">
          Foodies 🍴
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm">
          Cook smarter, eat better. Discover recipes, create your own, and save your favourites all in one place.
        </p>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/recipes" className="hover:text-red-500">Recipes</Link>
          <Link to="/create-recipe" className="hover:text-red-500">Create Recipe</Link>
          <Link to="/fav" className="hover:text-red-500">Favourites</Link>
          <Link to="/about" className="hover:text-red-500">About</Link>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t"></div>

        {/* Copyright */}
        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Foodies. Made with ❤️ by Kajal Golghate
        </p>

      </div>
    </footer>
  );
};

export default Footer;
