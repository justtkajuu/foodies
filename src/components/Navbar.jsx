import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-xl  transition ${
      isActive ? "text-red-500 font-semibold" : "text-gray-700"
    }`;

  return (
    <>
      {/* 🔹 Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-4 sm:px-6 md:px-20">
        <div className="flex justify-between items-center h-16">

          {/* Logo + Brand (Clickable) */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Foodies Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold text-red-500 font-gilroy">
              Foodies
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-lg font-semibold font-gilroy">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/recipes" className={navLinkClass}>
              Recipes
            </NavLink>
            <NavLink to="/create-recipe" className={navLinkClass}>
              Create Recipe
            </NavLink>
            <NavLink to="/fav" className={navLinkClass}>
              Favourites
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-gray-700"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* 🔹 Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-[#FFF5F0] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-2xl font-bold text-red-500">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-3xl">
            <FiX />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center gap-8 mt-20 font-gilroy">
          <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/recipes" className={navLinkClass}>
            Recipes
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/create-recipe"
            className={navLinkClass}
          >
            Create Recipe
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/fav" className={navLinkClass}>
            Favourites
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={navLinkClass}>
            About
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
