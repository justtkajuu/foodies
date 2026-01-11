import React from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("fav")) || [];

  return (
    <div className="min-h-screen px-5 py-10 font-gilroy">

      {/* 🔹 Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-red-500">
          Your Favourite Recipes ❤️
        </h1>
        <p className="text-gray-600 mt-2">
          All the recipes you love in one place
        </p>
      </div>

      {/* 🔹 Content */}
      {favourite.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {favourite.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <span className="text-6xl">💔</span>
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">
            No favourites yet
          </h2>
          <p className="text-gray-500 mt-2">
            Start adding recipes to see them here
          </p>
        </div>
      )}
    </div>
  );
};

export default Fav;
